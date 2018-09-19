import React, { Component } from 'react';
import MainNavBar from './sub-components/MainNavBar';
import PropTypes from 'prop-types';
import ArticleList from './sub-components/ArticleList';
import TopicList from './sub-components/TopicList';

class Homepage extends Component {
  state = {
    topicFilter: 'none'
  }
  render() {
    const { topicFilter } = this.state;
    const { user } = this.props;
    return (
      <div>
        <MainNavBar user={user} />
        <div className="homepage-content">
          <section className='homepage articles'>
            <ArticleList topicFilter={topicFilter} />
          </section>
          <section className='homepage topics'>
            <TopicList changeTopicFilter={this.changeTopicFilter} />
          </section>
        </div>
      </div>
    );
  }

  changeTopicFilter = (topic) => {
    this.setState({
      topicFilter: topic
    });
  }

}

Homepage.propTypes = {
  user: PropTypes.string,
};

export default Homepage;