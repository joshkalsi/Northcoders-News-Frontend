import React, { Component } from 'react';
import * as api from '../api';
import PropTypes from 'prop-types';
import MainNavBar from './sub-components/MainNavBar';
import SingleArticle from './sub-components/SingleArticle';
import CommentList from './sub-components/CommentList';
import { Link } from 'react-router-dom';
import CommentSubmit from './sub-components/CommentSubmit';

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
        <CommentSubmit articleID={article._id} loggedInUser={loggedInUser} addNewComment={this.addNewComment} />
        <CommentList comments={comments} />
      </div>
    );
  }

  addNewComment = (comment) => {
    const newComments = this.state.comments.map(comment => ({ ...comment }));
    newComments.push(comment);
    this.setState({
      comments: newComments
    });
  }
}

Article.propTypes = {
  match: PropTypes.object,
  loggedInUser: PropTypes.string
};

export default Article;