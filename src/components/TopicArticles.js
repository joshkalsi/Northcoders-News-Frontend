import React from 'react';
import MainNavBar from './sub-components/MainNavBar';
import ArticleList from './sub-components/ArticleList';
import TopicList from './sub-components/TopicList';
import PropTypes from 'prop-types';

const TopicArticles = ({ match, user }) => {
  const topicFilter = match.params.topic;
  return (
    <div>
      <MainNavBar user={user} />
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
  user: PropTypes.string,
};

export default TopicArticles;