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
    <div>
      <img src={user.avatar_url} onError={replaceImage} alt="User Avatar" height='100px' />
      <Link to={`/users/${user.username}`}>
        <p>{user.name}</p>
      </Link>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object
};

export default UserCard;