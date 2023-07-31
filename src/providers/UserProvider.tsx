import { createContext } from 'react';
import { User } from 'firebase/auth';

export const UserContext = createContext<User | null>(null);

type UserProviderProps = {
  user: User | null;
  children: React.ReactNode;
};

const UserProvider = ({ user, children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
