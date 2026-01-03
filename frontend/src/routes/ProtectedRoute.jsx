import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  // 1. If not logged in at all
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If Logged in but does not have authorization 
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    const redirectPath = user.role === 'ADMIN' ? '/admin/dashboard' : '/employee/dashboard';
    return <Navigate to={redirectPath} replace />;
  }

  
  return <Outlet />;
};

export default ProtectedRoute;