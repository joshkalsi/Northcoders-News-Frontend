import React from 'react';
import MainNavBar from './sub-components/MainNavBar';
import ArticleList from './sub-components/ArticleList';
import TopicList from './sub-components/TopicList';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopicArticles = ({ match, loggedInUser }) => {
  const topicFilter = match.params.topic;
  return (
    <div>
      <MainNavBar loggedInUser={loggedInUser} />
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
  match: PropTypes.object,
  loggedInUser: PropTypes.string,
};

export default TopicArticles;