import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from '../components/layout/MainLayout';

// Auth Pages
import Login from '../pages/auth/Login';
import AdminLogin from '../pages/auth/AdminLogin'; 

const AppRoutes = () => {
  return (
    <Routes>
      {/* --- PUBLIC ROUTES --- */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin-login" element={<AdminLogin />} /> 
      

      {/* --- PROTECTED ROUTES (Requires Login) --- */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          
          {/* Admin Specific */}
          <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
            <Route path="/admin/dashboard" element={<div className="text-2xl font-bold">Admin Dashboard</div>} />
            <Route path="/admin/manage" element={<div className="text-2xl font-bold">Manage Employees</div>} />
          </Route>
          
          {/* Employee Specific */}
          <Route element={<ProtectedRoute allowedRoles={['EMPLOYEE']} />}>
            <Route path="/employee/dashboard" element={<div className="text-2xl font-bold">Employee Dashboard</div>} />
            <Route path="/employee/profile" element={<div className="text-2xl font-bold">My Profile</div>} />
          </Route>

        </Route>
      </Route>

      {/* Catch-all redirect to standard login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;