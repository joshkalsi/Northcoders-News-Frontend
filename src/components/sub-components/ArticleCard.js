import React from 'react';
import PropTypes from 'prop-types';

const ArticleCard = ({ article }) => {
  return (
    <div className='article-card'>
      <h2>{article.title}</h2>
      <p>{article.created_by.name}</p>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object
};

export default ArticleCard;