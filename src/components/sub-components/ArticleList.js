import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchArticlesByTopic, fetchArticles } from '../../api';
import { Redirect } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import moment from 'moment';
import _shuffle from 'lodash.shuffle';
import '../../CSS/ArticleList.css';

class ArticleList extends Component {
  state = {
    articles: [],
    sortOrder: 'recent',
    error: null
  }

  componentDidMount() {
    const { topic } = this.props;
    if (topic !== 'none') {
      fetchArticlesByTopic(topic)
        .then(articles => {
          this.setState({
            articles
          });
        })
        .catch(error => this.setState({ error }));
    } else {
      fetchArticles()
        .then(articles => {
          this.setState({
            articles
          });
        })
        .catch(error => this.setState({ error }));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      const { topic } = this.props;
      if (topic !== 'none') {
        fetchArticlesByTopic(topic)
          .then(articles => {
            this.setState({
              articles
            });
          })
          .catch(error => this.setState({ error }));
      } else {
        fetchArticles()
          .then(articles => {
            this.setState({
              articles
            });
          })
          .catch(error => this.setState({ error }));
      }
    }
  }

  render() {
    let { articles, sortOrder, error } = this.state;
    const { topic } = this.props;
    const sortRecent = (a, b) => {
      if (moment(a.created_at).isBefore(moment(b.created_at))) return 1;
      else return -1;
    };
    const sortVotes = (a, b) => {
      return b.votes - a.votes;
    };
    if (sortOrder === 'recent') articles = articles.sort(sortRecent);
    else if (sortOrder === 'votes') articles = articles.sort(sortVotes);
    else if (sortOrder === 'random') articles = _shuffle(articles);

    return (
      <div className='articles'>
        {error && <Redirect to={{
          pathname: '/error',
          state: { error: error.response.status }
        }} />}
        <div className='articles-header'>
          {topic === 'none'
            ? <h1>All articles:</h1>
            : <h1>Articles about {topic}:</h1>
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
  topic: PropTypes.string.isRequired
};

export default ArticleList;