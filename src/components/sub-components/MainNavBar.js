import React from 'react';
import PropTypes from 'prop-types';
import UserSearch from './UserSearch';
import UserCard from './UserCard';
import UserLogin from './UserLogin';
import { Link } from 'react-router-dom';

const MainNavBar = ({ loggedInUser, userLogin }) => {
  return (
    <nav className='main-nav-bar'>
      <Link className='nc-news title' to='/'>
        <div>
          <img src='http://localhost:3000/images/nc-logo.png' alt="Northcoders Logo" className='nc-news logo' />
        </div>
        <h1 className='nc-news text'>Northcoders News</h1>
      </Link>

      <UserSearch />

      {loggedInUser
        ? <div>
          <UserCard />
          <button onClick={() => userLogin(null, true)} >Logout</button>
        </div>
        : <UserLogin userLogin={userLogin} />
      }
    </nav>
  );
};

MainNavBar.propTypes = {
  loggedInUser: PropTypes.string,
  userLogin: PropTypes.func
};

export default MainNavBar;