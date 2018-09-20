import React, { Component } from 'react';
import * as api from '../api';
import PropTypes from 'prop-types';
import MainNavBar from './sub-components/MainNavBar';
import SingleArticle from './sub-components/SingleArticle';
import CommentList from './sub-components/CommentList';
import { Link } from 'react-router-dom';

class Article extends Component {
  state = {
    article: {},
    comments: []
  }

  componentDidMount() {
    const { match } = this.props;
    const { article_id } = match.params;
    Promise.all([api.fetchSingleArticle(article_id), api.fetchCommentsforArticle(article_id)])
      .then(([article, comments]) => {
        this.setState({
          article,
          comments
        });
      });
  }
  render() {
    const { article, comments } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        <MainNavBar loggedInUser={loggedInUser} />
        <Link to={`/topics/${article.belongs_to}/articles`}>
          <h1>Back to articles</h1>
        </Link>
        <SingleArticle article={article} />
        <CommentList comments={comments} />
      </div>
    );
  }
}

Article.propTypes = {
  match: PropTypes.object,
  loggedInUser: PropTypes.object
};

export default Article;