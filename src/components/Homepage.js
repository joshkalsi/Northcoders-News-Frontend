import React from 'react';
import MainNavBar from './sub-components/MainNavBar';
import PropTypes from 'prop-types';

const Homepage = ({ user }) => {
  return (
    <MainNavBar user={user} />
  );
};

Homepage.propTypes = {
  user: PropTypes.string,
};

export default Homepage;