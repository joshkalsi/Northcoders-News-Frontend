import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Votes from './Votes';
import * as api from '../../api';
import { Redirect } from 'react-router-dom';

class CommentCard extends Component {
  state = {
    hidden: false,
    error: null
  }
  render() {
    const { comment, changeCommentVote, loggedInUser } = this.props;
    const { hidden, error } = this.state;
    return (
      <div>
        {error && <Redirect to={{
          pathname: '/error',
          state: { error: error.response.status }
        }} />}
        {!hidden &&
          <div>
            <p style={{ fontWeight: 'bold' }}> {comment.body}</p>
            <p>Posted: {moment(comment.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')} </p>
            <Votes id={comment._id} voteNumber={comment.votes} changeVote={changeCommentVote} type='comment' />
            <p>Created by: {comment.created_by.name}</p>
            {comment.created_by.username === loggedInUser && <button onClick={() => this.deleteComment(comment._id)}>Delete</button>}
          </div>
        }
      </div>
    );
  }

  deleteComment = (id) => {
    this.setState({ hidden: true },
      () => api.deleteComment(id).catch(error => this.setState({ error }))
    );
  };
}

CommentCard.propTypes = {
  comment: PropTypes.object,
  changeCommentVote: PropTypes.func,
  loggedInUser: PropTypes.string
};


export default CommentCard;