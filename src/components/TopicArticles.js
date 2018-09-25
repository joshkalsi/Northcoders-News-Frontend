import React, { Component } from 'react';
import ArticleList from './sub-components/ArticleList';
import TopicList from './sub-components/TopicList';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import '../CSS/TopicArticles.css';

class TopicArticles extends Component {
  state = {
    error: null
  }

  render() {
    const { match } = this.props;
    const { error } = this.state;
    const { topic } = match.params;
    return (
      <div>
        <div>
          {error && <Redirect to={{
            pathname: '/error',
            state: { error: error.response.status }
          }} />}
          <Link to={`/topics/${topic}/articles/submit`}>
            <h1>Submit an Article!</h1>
          </Link>
          <div className="topic-articles-content">
            <section className='homepage articles'>
              <ArticleList topic={topic} />
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