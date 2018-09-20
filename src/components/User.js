import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

class User extends Component {
  state = {
    searchedUser: {}
  }

  componentDidMount() {
    const { username } = this.props.match.params;
    api.fetchUser(username)
      .then(user => {
        this.setState({
          searchedUser: user
        });
      });
  }

  render() {
    const { searchedUser } = this.state;
    const replaceImage = (e) => {
      e.target.onError = null;
      e.target.src = 'http://localhost:3000/images/avatar-404.png';
    };
    return (
      <div>
        <img src={searchedUser.avatar_url} onError={replaceImage} alt="User Avatar" />
        <h1>Name: {searchedUser.name}</h1>
        <h2>Username: {searchedUser.username}</h2>
      </div>
    );
  }
}

User.propTypes = {
  match: PropTypes.object
};

export default User;
