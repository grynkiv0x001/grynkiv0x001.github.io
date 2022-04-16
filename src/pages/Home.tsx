import { Route, Routes } from 'react-router';

// Constants
import * as ROUTES from '../router/routes';

// Components
import { About, Header, Posts, Works } from '../components';

const Page = () => {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<About />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.WORKS} element={<Works />} />
        <Route path={ROUTES.POSTS} element={<Posts />} />
      </Routes>
    </div>
  );
};

export default Page;
