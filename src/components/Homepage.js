import React, { Component } from 'react';
import MainNavBar from './sub-components/MainNavBar';
import PropTypes from 'prop-types';
import ArticleList from './sub-components/ArticleList';

class Homepage extends Component {
  state = {
    sortOrder: 'recent'
  }
  render() {
    const { sortOrder } = this.state;
    const { user } = this.props;
    return (
      <div>
        <MainNavBar user={user} />
        <section className='homepage main'>
          <ArticleList sortOrder={sortOrder} />
        </section>
      </div>
    );
  }
}

Homepage.propTypes = {
  user: PropTypes.string,
};

export default Homepage;