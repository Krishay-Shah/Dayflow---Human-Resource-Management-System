import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // When the app starts, check if a user is already logged in (in localStorage)    
  useEffect(() => {
    const storedUser = localStorage.getItem('dayflow_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('dayflow_user', JSON.stringify(userData));
    localStorage.setItem('access_token', userData.access_token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('dayflow_user');
    localStorage.removeItem('access_token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);