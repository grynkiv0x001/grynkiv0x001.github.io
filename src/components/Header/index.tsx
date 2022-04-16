import { Link } from 'react-router-dom';

// Constants
import { HOME, WORKS, POSTS } from '../../router/routes';

const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <ul className="list">
          <li className="list__item">
            <Link to={HOME}>About</Link>
          </li>
          <li className="list__item">
            <Link to={WORKS}>Works</Link>
          </li>
          <li className="list__item">
            <Link to={POSTS}>Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
