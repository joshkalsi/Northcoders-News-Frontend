import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';
import moment from 'moment';
import _shuffle from 'lodash.shuffle';
import CommentSubmit from './CommentSubmit';
import { fetchCommentsforArticle, deleteComment as apiDeleteComment } from '../../api';

class CommentList extends Component {
  state = {
    sortOrder: 'recent',
    comments: []
  }

  componentDidUpdate(prevProps) {
    if (this.props.articleID !== prevProps.articleID) {
      const { articleID } = this.props;
      fetchCommentsforArticle(articleID)
        .then((comments) => {
          this.setState({
            comments
          });
        })
        .catch((error) => this.setState({ error }));
    }
  }

  render() {
    let { sortOrder, comments } = this.state;
    const { loggedInUser, articleID } = this.props;

    const sortRecent = (a, b) => {
      if (moment(a.created_at).isBefore(moment(b.created_at))) return 1;
      else return -1;
    };
    const sortVotes = (a, b) => {
      return b.votes - a.votes;
    };

    if (sortOrder === 'recent') comments = comments.sort(sortRecent);
    else if (sortOrder === 'votes') comments = comments.sort(sortVotes);
    else if (sortOrder === 'random') comments = _shuffle(comments);
    return (
      <div>
        <CommentSubmit articleID={articleID} loggedInUser={loggedInUser} addNewComment={this.addNewComment} />
        <div className="sort-order">
          <p onClick={() => this.changeSortOrder('recent')} className="sort-recent">Recent</p>
          <p onClick={() => this.changeSortOrder('votes')} className="sort-votes">Most Votes</p>
        </div>
        {comments.map(comment => {
          return <CommentCard key={comment._id} comment={comment} deleteComment={this.deleteComment} loggedInUser={loggedInUser} />;
        })}
      </div>
    );
  }

  changeSortOrder = (order) => {
    this.setState({
      sortOrder: order
    });
  }

  addNewComment = (comment) => {
    const newComments = this.state.comments.map(comment => ({ ...comment }));
    newComments.push(comment);
    this.setState({
      comments: newComments
    });
  }

  deleteComment = (commentID) => {
    const newComments = [... this.state.comments];
    const deleteIndex = newComments.findIndex(comment => comment._id === commentID);
    newComments.splice(deleteIndex, 1);
    this.setState({ comments: newComments }, () => {
      apiDeleteComment(commentID);
    });
  }
}

CommentList.propTypes = {
  articleID: PropTypes.string,
  loggedInUser: PropTypes.string
};

export default CommentList;