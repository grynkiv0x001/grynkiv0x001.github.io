import { lazy } from 'react';

export const HOME = '/';
export const ABOUT = '/about';
export const WORKS = '/works';
export const POSTS = '/posts';
export const RESUME = '/resume';

const routes = [
  {
    path: HOME,
    exact: true,
    element: lazy(() => import('../pages/About')),
  },
  {
    path: WORKS,
    exact: true,
    element: lazy(() => import('../pages/Works')),
  },
  {
    path: POSTS,
    exact: true,
    element: lazy(() => import('../pages/Posts')),
  },
  {
    path: RESUME,
    exact: true,
    element: lazy(() => import('../pages/Resume')),
  },
];

export default routes;
