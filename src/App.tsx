import { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { onAuthStateChanged,User } from 'firebase/auth';

import { Header } from '@/components';
import { RouteType } from '@/core/_types/RouteType';
import { auth } from '@/firebase';
import UserProvider from '@/providers/UserProvider';
import routes from '@/router/routes';

import './App.scss';

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log('user not logged in');
        return;
      }

      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      setUser(user);
    });
  }, []);

  return (
    <div className="app">
      <UserProvider user={user}>
        <Header />
        <Routes>
          {routes.map((route: RouteType, index: number) => {
            return (
              <Route
                key={index}
                path={route?.path}
                element={
                  <div>
                    <Suspense fallback={<div>Loading...</div>}>
                      {route && <route.element />}
                    </Suspense>
                  </div>
                }
              />
            );
          })}
        </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
