import { Access } from 'payload/types';

export const isAdmin: Access = ({ req }) => {
    return req.user?.role === 'admin';
    };

    
export const isAdminOrRole = (role: string): Access => {
    return ({ req }) => {
      return req.user?.role === 'admin' || req.user?.role === role
    }
  }

export const isPublic: Access = () => true;