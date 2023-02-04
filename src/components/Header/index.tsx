import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Constants
import { HOME, POSTS, WORKS } from '@/router/routes';

const Nav = styled.div`
  padding: 20px 35px 0;
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
const ListItem = styled.li`
  color: palevioletred;
  list-style: none;
`;
const MessageStrip = styled.div`
  position: absolute;
  left: -30px;
  top: 30px;
  padding: 5px 20px;
  font-size: 16px;
  background-color: #ffe839;
  border: 1px solid #000;
  transform: rotateZ(-35deg);
`;

const Header = () => {
  return (
    <div className="header">
      <MessageStrip>In development...</MessageStrip>
      <Nav>
        <List>
          <ListItem>
            <Link className="header__link" to={HOME}>
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link className="header__link" to={WORKS}>
              Works
            </Link>
          </ListItem>
          <ListItem>
            <Link className="header__link" to={POSTS}>
              Posts
            </Link>
          </ListItem>
        </List>
      </Nav>
    </div>
  );
};

export default Header;
