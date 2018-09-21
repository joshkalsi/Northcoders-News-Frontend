import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserLogin extends Component {
  state = {
    username: ''
  }
  render() {
    return (
      <div className='user-login'>
        <form>
          <input type="text" onChange={this.handleChange} name="username-login" id="username-login" value={this.state.username} placeholder='Username:' />
          <br />
          <input type="password" name="password-login" id="password-login" placeholder='Password:' />
          <br />
          <button onClick={this.loginUser}>Submit</button>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  loginUser = (e) => {
    e.preventDefault();
    const { userLogin } = this.props;
    const { username } = this.state;
    userLogin(username);
    this.setState({ username: '' });
  }
}

UserLogin.propTypes = {
  userLogin: PropTypes.func
};

export default UserLogin;