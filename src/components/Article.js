import React, { Component } from 'react';
import * as api from '../api';
import PropTypes from 'prop-types';
import SingleArticle from './sub-components/SingleArticle';
import CommentList from './sub-components/CommentList';
import { Link, Redirect } from 'react-router-dom';
import CommentSubmit from './sub-components/CommentSubmit';

class Article extends Component {
  state = {
    article: {},
    comments: [],
    error: null,
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
      })
      .catch((error) => this.setState({ error }));
  }
  render() {
    const { article, comments, error } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        {error && <Redirect to={{
          pathname: '/error',
          state: { error: error.response.status }
        }} />}
        <Link to={`/topics/${article.belongs_to}/articles`}>
          <h1>Back to articles</h1>
        </Link>
        <SingleArticle article={article} changeArticleVote={this.changeArticleVote} />
        <CommentSubmit articleID={article._id} loggedInUser={loggedInUser} addNewComment={this.addNewComment} />
        <CommentList comments={comments} changeCommentVote={this.changeCommentVote} />
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

  changeArticleVote = (value) => {
    const article = { ...this.state.article };
    if (value === 'up') article.votes++;
    else if (value === 'down') article.votes--;
    this.setState({ article });
  }

  changeCommentVote = (value, id) => {
    const comments = this.state.comments.map(comment => ({ ...comment }));
    const commentToChangeIndex = comments.findIndex(comment => comment._id === id);
    if (value === 'up') comments[commentToChangeIndex].votes++;
    else if (value === 'down') comments[commentToChangeIndex].votes--;
    this.setState({ comments });
  }
}

Article.propTypes = {
  match: PropTypes.object,
  loggedInUser: PropTypes.string
};

export default Article;