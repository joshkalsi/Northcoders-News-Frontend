import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Votes from './Votes';

const ArticleCard = ({ article, changeArticleVote }) => {
  return (
    <div className='article-card'>
      <Link to={`/articles/${article._id}`} >
        <h3>{article.title}</h3>
        <p>{article.created_by.name}</p>
      </Link>
      <Votes id={article._id} type='article' voteNumber={article.votes} changeVote={changeArticleVote} />
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object,
  changeArticleVote: PropTypes.func
};

export default ArticleCard;