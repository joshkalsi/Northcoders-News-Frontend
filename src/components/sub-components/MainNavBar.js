import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserSearch from './UserSearch';
import UserCard from './UserCard';
import UserLogin from './UserLogin';

const MainNavBar = ({ user }) => {
  return (
    <nav className='main-nav-bar'>
      <div className='nc-news title'>
        <a href='/' >
          <img src="../../images/nc-logo.png" alt="Northcoders Logo" className='nc-news logo' />
          <h1 className='nc-news text'>Northcoders News</h1>
        </a>
      </div>

      <Link to='/topics'>
        <h2>Topics</h2>
      </Link>

      <UserSearch />

      {user
        ? <UserCard />
        : <UserLogin />
      }
    </nav>
  );
};

MainNavBar.propTypes = {
  user: PropTypes.string
};

export default MainNavBar;