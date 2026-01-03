import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setError('');

    // Phase 1 Mock Logic
    if (password !== 'admin123') {
      setError('System authentication failed.'); 
      return;
    }

    login({ email, role: 'ADMIN', access_token: 'mock_admin_token' });
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-4">
      {/* Light Card with Teal Top Border */}
      <div className="bg-white border-t-2 border-t-teal-600 p-6 rounded-lg w-full max-w-[310px] shadow-sm">
        
        <div className="mb-6">
          <h2 className="text-slate-800 text-lg font-black tracking-tighter uppercase italic">Admin Console</h2>
          <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em]">Management Access</p>
        </div>
        
        <form onSubmit={handleAdminLogin} className="flex flex-col gap-3">
          <div>
            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest ml-0.5">Admin Email</label>
            <input 
              type="email" 
              className="w-full bg-slate-50 border border-slate-200 rounded-md py-1.5 px-3 text-xs text-slate-900 outline-none focus:border-teal-600 transition-colors"
              placeholder="e-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest ml-0.5">Security Key</label>
            <input 
              type="password" 
              className="w-full bg-slate-50 border border-slate-200 rounded-md py-1.5 px-3 text-xs text-slate-900 outline-none focus:border-teal-600 transition-colors"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="w-full bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold py-2 rounded-md transition-all active:scale-[0.98] mt-2">
            Authorize System
          </button>

          {/* THE RED LINE ERROR */}
          {error && (
            <p className="text-[10px] text-red-500 font-bold text-center mt-1">
              {error}
            </p>
          )}
        </form>

        <div className="mt-5 text-center">
          <Link to="/login" className="text-[9px] text-slate-400 font-bold uppercase hover:text-teal-600 tracking-widest transition-colors">
            ← Employee Portal
          </Link>
        </div>
      </div>
    </div>
  );
}