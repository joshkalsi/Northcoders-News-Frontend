import React from 'react';
import ArticleList from './sub-components/ArticleList';
import TopicList from './sub-components/TopicList';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopicArticles = ({ match }) => {
  const topicFilter = match.params.topic;
  return (
    <div>
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
  );
};

TopicArticles.propTypes = {
  match: PropTypes.object
};

export default TopicArticles;