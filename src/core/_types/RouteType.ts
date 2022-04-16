export type RouteType =
  | {
      path: string;
      exact?: boolean;
      element: React.LazyExoticComponent<() => JSX.Element>;
    }
  | undefined;
