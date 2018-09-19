import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article._id}`} >
      <div className='article-card'>
        <h3>{article.title}</h3>
        <p>{article.created_by.name}</p>
      </div>
    </Link>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object
};

export default ArticleCard;