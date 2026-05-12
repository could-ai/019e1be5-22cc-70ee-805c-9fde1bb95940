import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { Users, DollarSign, Activity, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalStudents: 0, pendingFees: 0, totalCollected: 0 });

  useEffect(() => {
    // Mock fetching stats for demonstration
    setStats({
      totalStudents: 142,
      pendingFees: 12500,
      totalCollected: 45000
    });
  }, []);

  return (
    <div className="min-h-screen bg-darker text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-center bg-dark p-4 rounded-2xl border border-white/5 shadow-lg">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">ADMIN PORTAL</h1>
          <button onClick={() => signOut(auth)} className="text-gray-400 hover:text-white transition-colors p-2">
            <LogOut size={20} />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl flex items-center space-x-4">
            <div className="bg-blue-500/20 p-4 rounded-xl text-blue-400">
              <Users size={32} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Students</p>
              <p className="text-3xl font-bold">{stats.totalStudents}</p>
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl flex items-center space-x-4">
            <div className="bg-green-500/20 p-4 rounded-xl text-green-400">
              <DollarSign size={32} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Fees Collected</p>
              <p className="text-3xl font-bold">₹{stats.totalCollected}</p>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl flex items-center space-x-4">
            <div className="bg-red-500/20 p-4 rounded-xl text-red-400">
              <Activity size={32} />
            </div>
            <div>
              <p className="text-sm text-gray-400">Pending Fees</p>
              <p className="text-3xl font-bold">₹{stats.pendingFees}</p>
            </div>
          </div>
        </div>

        {/* Admin Controls placeholder */}
        <div className="glass p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">Student Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="p-3">Student Name</th>
                  <th className="p-3">ID</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-3">Rahul Sharma</td>
                  <td className="p-3 text-gray-400">LIB-1001</td>
                  <td className="p-3"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">Paid</span></td>
                  <td className="p-3"><button className="text-primary hover:text-blue-400">Edit</button></td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-3">Aman Verma</td>
                  <td className="p-3 text-gray-400">LIB-1002</td>
                  <td className="p-3"><span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-sm">Pending</span></td>
                  <td className="p-3"><button className="text-primary hover:text-blue-400">Edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
