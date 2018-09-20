import React, { Component } from 'react';
import MainNavBar from './sub-components/MainNavBar';
import PropTypes from 'prop-types';
import ArticleList from './sub-components/ArticleList';
import TopicList from './sub-components/TopicList';

class Homepage extends Component {
  state = {

  }
  render() {
    const { loggedInUser } = this.props;
    return (
      <div>
        <MainNavBar loggedInUser={loggedInUser} />
        <div className="homepage-content">
          <section className='homepage articles'>
            <ArticleList topicFilter={'none'} />
          </section>
          <section className='homepage topic-list'>
            <TopicList />
          </section>
        </div>
      </div>
    );
  }

}

Homepage.propTypes = {
  loggedInUser: PropTypes.object,
};

export default Homepage;