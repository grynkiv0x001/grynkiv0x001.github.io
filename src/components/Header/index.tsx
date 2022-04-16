import { Link } from 'react-router-dom';

// Constants
import * as ROUTES from '../../router/routes';

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <ul className="list">
          <li className="list__item">
            <Link to={ROUTES.ABOUT}>About</Link>
          </li>
          <li className="list__item">
            <Link to={ROUTES.WORKS}>Works</Link>
          </li>
          <li className="list__item">
            <Link to={ROUTES.POSTS}>Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
