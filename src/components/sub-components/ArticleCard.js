import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Votes from './Votes';
import moment from 'moment';

const ArticleCard = ({ article, changeArticleVote }) => {
  return (
    <div className='article-card'>
      <Link to={`/articles/${article._id}`} >
        <h1>{article.title}</h1>
        <p>Written by: {article.created_by.name}, {moment(article.created_at).format('DD/MM/YYYY')}</p>
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