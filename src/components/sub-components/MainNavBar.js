import React from 'react';
import PropTypes from 'prop-types';
import UserSearch from './UserSearch';
import UserCard from './UserCard';
import UserLogin from './UserLogin';
import { Link } from 'react-router-dom';

const MainNavBar = ({ loggedInUser, userLogin, user }) => {
  return (
    <nav className='main-nav-bar'>
      <Link className='nc-news title' to='/'>
        <div>
          <img src='/images/nc-logo.png' alt="Northcoders Logo" className='nc-news logo' />
        </div>
        <h1 className='nc-news text'>Northcoders News</h1>
      </Link>

      <UserSearch />
      <div className='navbar-user'>
        {loggedInUser
          ? <div>
            <UserCard user={user} />
            <button id='user-logout' onClick={() => userLogin(null, true)} >Logout</button>
          </div>
          : <UserLogin userLogin={userLogin} />
        }
      </div>
    </nav>
  );
};

MainNavBar.propTypes = {
  loggedInUser: PropTypes.string,
  userLogin: PropTypes.func,
  user: PropTypes.object
};

export default MainNavBar;