import { createContext, useContext, useMemo, useState } from 'react';
import api from '../api/axios.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('modernStoreUser');
    return stored ? JSON.parse(stored) : null;
  });

  const register = async (payload) => {
    const { data } = await api.post('/auth/register', payload);
    setUser(data);
    localStorage.setItem('modernStoreUser', JSON.stringify(data));
  };

  const login = async (payload) => {
    const { data } = await api.post('/auth/login', payload);
    setUser(data);
    localStorage.setItem('modernStoreUser', JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('modernStoreUser');
  };

  const value = useMemo(() => ({ user, register, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
