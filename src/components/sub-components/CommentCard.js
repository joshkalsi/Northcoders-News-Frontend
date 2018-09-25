import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Votes from './Votes';
import { Redirect } from 'react-router-dom';

class CommentCard extends Component {
  state = {
    error: null
  }
  render() {
    const { comment, loggedInUser, deleteComment } = this.props;
    const { error } = this.state;
    return (
      <div>
        {error && <Redirect to={{
          pathname: '/error',
          state: { error: error.response.status }
        }} />}
        <div>
          <p style={{ fontWeight: 'bold' }}> {comment.body}</p>
          <p>Posted: {moment(comment.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')} </p>
          <Votes id={comment._id} voteNumber={comment.votes} type='comment' />
          <p>Created by: {comment.created_by.name}</p>
          {comment.created_by.username === loggedInUser && <button onClick={() => deleteComment(comment._id)}>Delete</button>}
        </div>
      </div>
    );
  }
}

CommentCard.propTypes = {
  comment: PropTypes.object,
  loggedInUser: PropTypes.string,
  deleteComment: PropTypes.func
};


export default CommentCard;