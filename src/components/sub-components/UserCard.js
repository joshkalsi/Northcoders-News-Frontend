import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  if (!user) user = {};
  const replaceImage = (e) => {
    e.target.onError = null;
    e.target.src = 'http://localhost:3000/images/avatar-404.png';
  };
  return (
    <div>
      <img src={user.avatar_url} onError={replaceImage} alt="User Avatar" height='100px' />
      <p>{user.name}</p>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object
};

export default UserCard;