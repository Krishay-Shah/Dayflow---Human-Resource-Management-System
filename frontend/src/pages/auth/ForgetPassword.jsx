import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
      <div className="bg-white border border-slate-200 p-8 rounded-2xl w-full max-w-[380px] shadow-sm text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Reset Password</h2>
        <p className="text-sm text-slate-500 mb-6">Enter your email and we'll send you a recovery link.</p>
        
        <input 
          type="email" 
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 mb-4 outline-none focus:border-indigo-500"
          placeholder="Enter your email"
        />
        
        <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl mb-4">
          Send Link
        </button>
        
        <Link to="/login" className="text-xs text-indigo-600 font-medium hover:underline">
          Back to Login
        </Link>
      </div>
    </div>
  );
}