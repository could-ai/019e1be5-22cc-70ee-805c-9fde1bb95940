import React from 'react';

export default function PublicStatus() {
  return (
    <div className="min-h-screen bg-darker text-white p-4">
      <div className="max-w-2xl mx-auto mt-10 space-y-6">
        <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          SMART LIBRARY STATUS
        </h1>
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl mb-4 border-b border-white/10 pb-2">Student Fee Status</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
              <span>Rahul Sharma</span>
              <span className="text-green-400 bg-green-500/10 px-3 py-1 rounded-full text-sm">Paid</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
              <span>Aman Verma</span>
              <span className="text-red-400 bg-red-500/10 px-3 py-1 rounded-full text-sm">Pending ₹500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
