import React, { createContext, useContext, useState, useEffect } from 'react';
import apiUser from '../services/apiUser';

interface IUser {
  id: number;
  name: string;
}

interface IUserContext {
  users: IUser[];
}

export const UserContext = createContext({} as IUserContext);

export const UsersProvider: React.FC = ({ children }: any) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const response = await apiUser.get(`/users`);

      setUsers(response.data);
    })();
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};

export function useUsers(): IUserContext {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUsers must be used within an UserProvider ');
  }

  return context;
}
