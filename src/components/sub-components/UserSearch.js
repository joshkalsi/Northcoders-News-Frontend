import React, { Component } from 'react';

class UserSearch extends Component {
  state = {
    searchedUsername: ''
  }

  render() {
    const { searchedUsername } = this.state;
    return (
      <div className='user-search'>
        <form>
          <input onChange={this.handleChange} type="text" value={searchedUsername} placeholder='User Search' />
          <button onClick={this.search}>Go!</button>
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
    window.location.href = `/users/${searchedUsername}`;
  }
}

export default UserSearch;