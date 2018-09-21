import React, { Component } from 'react';
import ArticleList from './sub-components/ArticleList';
import TopicList from './sub-components/TopicList';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as api from '../api';

class TopicArticles extends Component {
  state = {
    topics: [],
    error: null
  }

  componentDidMount() {
    api.fetchTopics()
      .then(topics => {
        this.setState({
          topics
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { match } = this.props;
    const { topics, error } = this.state;
    const topicFilter = match.params.topic;
    const topicCheck = topics.filter(topic => topic.slug !== topicFilter).length === 3;
    return (
      <div>
        <div>
          {error && <Redirect to={{
            pathname: '/error',
            state: { error: error.response.status }
          }} />}
          {topicCheck && <Redirect to={{
            pathname: '/error',
            state: { error: 404 }
          }} />}
          <Link to={`/topics/${topicFilter}/articles/submit`}>
            <h1>Submit an Article!</h1>
          </Link>
          <div className="topic-articles-content">
            <section className='homepage articles'>
              <ArticleList topicFilter={topicFilter} />
            </section>
            <section className='homepage topic-list'>
              <TopicList />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

TopicArticles.propTypes = {
  match: PropTypes.object
};

export default TopicArticles;