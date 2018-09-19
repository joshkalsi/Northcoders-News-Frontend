import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserSearch from './UserSearch';
import UserCard from './UserCard';

const MainNavBar = ({ user }) => {
  return (
    <nav className='main-nav-bar'>
      <h1 className='nc-news-title'>Northcoders News</h1>

      <Link to='/topics'>
        <h2>Topics</h2>
      </Link>

      <UserSearch />

      {user
        ? <UserCard />
        : <UserSearch />
      }
    </nav>
  );
};

MainNavBar.propTypes = {
  user: PropTypes.string
};

export default MainNavBar;