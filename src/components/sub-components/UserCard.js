import React from 'react';

const UserCard = ({ user }) => {
  if (!user) user = {}
  return (
    <div>
      <img src={user.avatar_url} alt="User Avatar" />
      <p>{user.name}</p>
    </div>
  );
};

export default UserCard;