import { useContext } from 'react';
import { AuthContext } from './auth.js';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
