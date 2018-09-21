import React from 'react';
import UserCard from './UserCard';
import moment from 'moment';
import PropTypes from 'prop-types';
import Votes from './Votes';

const SingleArticle = ({ article, changeArticleVote }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <Votes id={article._id} voteNumber={article.votes} changeVote={changeArticleVote} type='article' />
      <p>Posted: {moment(article.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')} </p>
      <p className='article body'>{article.body}</p>
      <UserCard user={article.created_by} />
    </div>
  );
};

SingleArticle.propTypes = {
  article: PropTypes.object,
  changeArticleVote: PropTypes.func
};

export default SingleArticle;