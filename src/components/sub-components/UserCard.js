import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  if (!user) user = {};
  const replaceImage = (e) => {
    e.target.onError = null;
    e.target.src = 'http://localhost:3000/images/avatar-404.png';
  };
  return (
    <div className='navbar-usercard'>
      <img src={user.avatar_url} onError={replaceImage} alt="User Avatar" />
      <Link to={`/users/${user.username}`}>
        <h2>{user.name}</h2>
      </Link>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object
};

export default UserCard;