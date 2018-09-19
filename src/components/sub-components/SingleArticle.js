import React from 'react';
import UserCard from './UserCard';
import moment from 'moment';
import PropTypes from 'prop-types';

const SingleArticle = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>Posted: {moment(article.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')} </p>
      <p className='article body'>{article.body}</p>
      <UserCard user={article.created_by} />
    </div>
  );
};

SingleArticle.propTypes = {
  article: PropTypes.object
};

export default SingleArticle;