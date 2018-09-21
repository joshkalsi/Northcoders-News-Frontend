import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Votes from './Votes';

const SingleComment = ({ comment, changeCommentVote }) => {
  return (
    <div>
      <p style={{ fontWeight: 'bold' }}> {comment.body}</p>
      <p>Posted: {moment(comment.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')} </p>
      <Votes id={comment._id} voteNumber={comment.votes} changeVote={changeCommentVote} type='comment' />
      <p>Created by: {comment.created_by.name}</p>
    </div>
  );
};

SingleComment.propTypes = {
  comment: PropTypes.object,
  changeCommentVote: PropTypes.func
};

export default SingleComment;