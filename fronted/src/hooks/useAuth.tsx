import { useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import type { AuthContextType } from '../types.ts';

const useAuth = () => useContext(AuthContext) as AuthContextType;

export default useAuth;