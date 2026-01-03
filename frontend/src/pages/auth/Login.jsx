import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();
    setError('');

    // Mock Validation
    if (password !== 'password123') {
      setError('Invalid email/ID or password.');
      return;
    }

    login({ email: identifier, role: 'EMPLOYEE', access_token: 'mock_token' });
    navigate('/employee/dashboard');
  };

  

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 p-6 rounded-lg w-full max-w-[310px] shadow-sm">
        <div className="mb-6 border-l-4 border-teal-500 pl-3">
          <h2 className="text-xl font-black text-slate-800 tracking-tighter uppercase">Dayflow</h2>
          <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">Employee Portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Enter Employee ID / Email</label>
            <input 
              type="text" 
              className="w-full bg-slate-50 border border-slate-200 rounded-md py-1.5 px-3 text-xs text-slate-900 outline-none focus:border-teal-500 transition-all placeholder:text-slate-300"
              placeholder="ID/Email"
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase">Password</label>
              <Link to="/forgot-password" size="sm" className="text-[10px] text-teal-600 hover:text-teal-700 font-bold">
                Reset?
              </Link>
            </div>
            <input 
              type="password" 
              className="w-full bg-slate-50 border border-slate-200 rounded-md py-1.5 px-3 text-xs text-slate-900 outline-none focus:border-teal-500 transition-all placeholder:text-slate-300"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button className="w-full bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold py-2 rounded-md transition-all active:scale-[0.98] mt-2 shadow-sm">
            Authenticate
          </button>
           {error && (
            <p className="text-[10px] text-red-500 font-bold text-center mt-2 animate-in fade-in slide-in-from-top-1">
              {error}
            </p>
        )}
        </form>
       

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
          <Link to="/admin-login" className="text-[9px] text-slate-400 hover:text-teal-600 font-bold uppercase">
            Admin Link
          </Link>
          
        </div>
      </div>
    </div>
  );
}