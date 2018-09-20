import React from 'react';
import PropTypes from 'prop-types';
import UserSearch from './UserSearch';
import UserCard from './UserCard';
import UserLogin from './UserLogin';
import { Link } from 'react-router-dom';

const MainNavBar = ({ loggedInUser }) => {
  return (
    <nav className='main-nav-bar'>
      <div className='nc-news title'>
        <Link to='/'>
          <img src='http://localhost:3000/images/nc-logo.png' alt="Northcoders Logo" className='nc-news logo' />
          <h1 className='nc-news text'>Northcoders News</h1>
        </Link>
      </div>

      <UserSearch />

      {Object.keys(loggedInUser).length
        ? <UserCard />
        : <UserLogin />
      }
    </nav>
  );
};

MainNavBar.propTypes = {
  loggedInUser: PropTypes.object
};

export default MainNavBar;