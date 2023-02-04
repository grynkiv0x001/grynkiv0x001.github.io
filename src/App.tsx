import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@/components';
import { RouteType } from '@/core/_types/RouteType';
import routes from '@/router/routes';

import './App.scss';

const App = () => {
  return (
    <div className="app">
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
    </div>
  );
};

export default App;
