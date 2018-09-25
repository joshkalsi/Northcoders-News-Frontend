import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../api';
import ArticleCard from './ArticleCard';
import moment from 'moment';
import _shuffle from 'lodash.shuffle';
import '../../CSS/ArticleList.css';

class ArticleList extends Component {
  state = {
    articles: [],
    sortOrder: 'recent'
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
    let { articles, sortOrder } = this.state;
    const { topicFilter } = this.props;
    const sortRecent = (a, b) => {
      if (moment(a.created_at).isBefore(moment(b.created_at))) return 1;
      else return -1;
    };
    const sortVotes = (a, b) => {
      return b.votes - a.votes;
    };
    if (topicFilter !== 'none') articles = articles.filter(article => article.belongs_to === topicFilter);
    if (sortOrder === 'recent') articles = articles.sort(sortRecent);
    else if (sortOrder === 'votes') articles = articles.sort(sortVotes);
    else if (sortOrder === 'random') articles = _shuffle(articles);

    return (
      <div className='articles'>
        <div className='articles-header'>
          {topicFilter === 'none'
            ? <h1>All articles:</h1>
            : <h1>Articles about {topicFilter}:</h1>
          }
          <div className="sort-order">
            <p onClick={() => this.changeSortOrder('recent')} className={`sort-recent' ${sortOrder === 'recent'}`} >Recent</p>
            <p onClick={() => this.changeSortOrder('votes')} className={`sort-votes' ${sortOrder === 'votes'}`} >Most Votes</p>
            <p onClick={() => this.changeSortOrder('random')} className={`sort-random' ${sortOrder === 'random'}`} >Random</p>
          </div>
        </div>
        {articles
          .map(article => {
            return <ArticleCard key={article._id} article={article} changeArticleVote={this.changeArticleVote} />;
          })
        }
      </div>
    );
  }

  changeSortOrder = (order) => {
    this.setState({
      sortOrder: order
    });
  }

  changeArticleVote = (value, id) => {
    const articles = this.state.articles.map(article => ({ ...article }));
    const articleToChangeIndex = articles.findIndex(article => article._id === id);
    if (value === 'up') articles[articleToChangeIndex].votes++;
    else if (value === 'down') articles[articleToChangeIndex].votes--;
    this.setState({ articles });
  }
}

ArticleList.propTypes = {
  topicFilter: PropTypes.string.isRequired
};

export default ArticleList;