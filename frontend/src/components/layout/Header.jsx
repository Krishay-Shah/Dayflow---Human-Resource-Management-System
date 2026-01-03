import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user } = useAuth();
  return (
    <header className="h-16 border-b border-slate-800 bg-[#0f172a]/50 backdrop-blur-md flex items-center justify-end px-8">
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-white">{user?.email}</p>
          <p className="text-[10px] text-sky-400 font-bold uppercase tracking-wider">{user?.role}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold">
          {user?.email[0].toUpperCase()}
        </div>
      </div>
    </header>
  );
};

export default Header;