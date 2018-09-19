import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../api';
import ArticleCard from './ArticleCard';

class ArticleList extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    api.fetchArticles()
      .then(articles => {
        this.setState({
          articles
        });
      });
  }

  render() {
    const { articles } = this.state;
    // const { sortOrder } = this.props;

    return (
      <div>
        {
          articles.map(article => {
            return <ArticleCard key={article._id} article={article} />;
          })
        }
      </div>
    );
  }
}

ArticleList.propTypes = {
  sortOrder: PropTypes.string.isRequired
};

export default ArticleList;