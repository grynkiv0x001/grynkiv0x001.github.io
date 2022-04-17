import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Core & consts
import routes from './router/routes';
import { RouteType } from './core/_types/RouteType';

// Components
import { Header } from './components';

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
