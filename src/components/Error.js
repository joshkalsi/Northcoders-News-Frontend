import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ location }) => {
  const errorStatus = location.state.error;
  const error = {
    status: errorStatus,
    message: '',
    title: ''
  };

  switch (errorStatus) {
    case 400:
      error.title = '400 Bad Request';
      error.message = 'Check that you have passed all information correctly.';
      break;
    case 404:
      error.title = '404 Page Not Found';
      error.message = 'Couldn\'t find page';
      break;
    case 500:
      error.title = '500 Internal Servor Error';
      error.message = 'Something borked itself';
      break;
    default:
      error.title = 'Error';
      error.message = 'Something went wrong but we don\'t know what';
      break;
  }
  return (
    <div className='error'>
      <h1>{error.title}</h1>
      <p>{error.message}</p>
    </div>
  );
};

Error.propTypes = {
  location: PropTypes.object
};

export default Error;