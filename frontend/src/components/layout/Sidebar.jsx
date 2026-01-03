import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const { user, logout } = useAuth();

  const links = [
    { name: 'Dashboard', path: `/${user?.role.toLowerCase()}/dashboard`, roles: ['ADMIN', 'EMPLOYEE'] },
    { name: 'Employees', path: '/admin/manage', roles: ['ADMIN'] },
    { name: 'My Profile', path: '/employee/profile', roles: ['EMPLOYEE'] },
  ];

  return (
    <aside className="w-64 bg-[#0f172a] border-r border-slate-800 flex flex-col p-6">
      <h1 className="text-2xl font-bold text-sky-400 mb-10">Dayflow</h1>
      <nav className="flex-1 space-y-2">
        {links.map(link => link.roles.includes(user?.role) && (
          <NavLink 
            key={link.path} 
            to={link.path}
            className={({isActive}) => `block p-3 rounded-lg ${isActive ? 'bg-sky-400 text-black font-bold' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
      <button onClick={logout} className="mt-auto p-3 text-red-400 hover:bg-red-400/10 rounded-lg text-left">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;