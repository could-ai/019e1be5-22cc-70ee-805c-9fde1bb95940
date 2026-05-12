import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { LogOut, User, CreditCard, Bell, Wifi } from 'lucide-react';

export default function StudentDashboard() {
  const [profile, setProfile] = useState(null);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      if (!auth.currentUser) return;
      const docRef = doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data());
      }
      
      const q = query(collection(db, 'payments'), where('userId', '==', auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      const paymentList = [];
      querySnapshot.forEach((doc) => {
        paymentList.push({ id: doc.id, ...doc.data() });
      });
      setPayments(paymentList);
    };

    fetchStudentData();
  }, []);

  return (
    <div className="min-h-screen bg-darker text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-center bg-dark p-4 rounded-2xl border border-white/5 shadow-lg">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">SMART LIBRARY</h1>
          <button onClick={() => signOut(auth)} className="text-gray-400 hover:text-white transition-colors p-2">
            <LogOut size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="glass p-6 rounded-2xl md:col-span-1 flex flex-col items-center text-center space-y-4">
            <div className="w-24 h-24 bg-gradient-to-tr from-primary to-secondary rounded-full p-1">
              <div className="w-full h-full bg-darker rounded-full flex items-center justify-center overflow-hidden">
                {profile?.photoURL ? (
                  <img src={profile.photoURL} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User size={40} className="text-gray-400" />
                )}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">{profile?.name || 'Student Name'}</h2>
              <p className="text-gray-400 text-sm">ID: {profile?.libraryId || 'LIB-0000'}</p>
            </div>
            <div className={`px-4 py-1 rounded-full text-sm font-semibold ${profile?.status === 'Paid' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              {profile?.status || 'Pending'}
            </div>
          </div>

          {/* Action Dashboard */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                  <CreditCard size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Pending Fee</p>
                  <p className="text-xl font-bold">₹{profile?.pendingAmount || 0}</p>
                </div>
              </div>
              <div className="glass p-4 rounded-xl flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                  <Wifi size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Library WiFi</p>
                  <p className="text-lg font-bold">{profile?.wifiPassword || 'Loading...'}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass p-6 rounded-2xl space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2"><Bell size={18}/> Notifications</h3>
              {profile?.status !== 'Paid' && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <p className="text-red-400 font-semibold">Fee Pending</p>
                    <p className="text-sm text-gray-400">Your monthly library fee is pending.</p>
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Pay Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
