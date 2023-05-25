import { Link, useHistory } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const MainNavigation = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const isloggedIn = authContext.isLoggedIn;
  const logoutHandler = () => {
    authContext.logout();
    history.replace("/");
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isloggedIn && <li>
            <Link to='/auth'>Login</Link>
          </li>}

          {isloggedIn && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {isloggedIn && <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
