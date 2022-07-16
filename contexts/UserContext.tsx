import { parseCookies } from 'nookies';
import { createContext, useEffect, useState } from 'react';

interface UserContextType {
  name: string;
  email: string;
}

export const UserContext = createContext({} as UserContextType);

interface UserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState({} as UserContextType);
  const { user } = parseCookies(null, 'user');

  useEffect(() => {
    setUserData(JSON.parse(user));
  }, [user]);

  return (
    <UserContext.Provider
      value={{ name: userData.name, email: userData.email }}
    >
      {children}
    </UserContext.Provider>
  );
}
