import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class UserSearch extends Component {
  state = {
    searchedUsername: '',
    redirect: ''
  }

  componentDidUpdate() {
    if (this.state.redirect !== '') {
      this.setState({ redirect: '' });
    }
  }
  render() {
    const { searchedUsername, redirect } = this.state;
    return (

      <div className='user-search'>
        {redirect && <Redirect to={`/users/${redirect}`} />}
        <form onSubmit={this.search}>
          <input onChange={this.handleChange} type="text" value={searchedUsername} placeholder='User Search' />
          <button>Go!</button>
        </form>

      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      searchedUsername: e.target.value
    });
  }

  search = (e) => {
    const { searchedUsername } = this.state;
    e.preventDefault();
    this.setState({ redirect: searchedUsername, searchedUsername: '' });
  }
}

export default UserSearch;