import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const SingleComment = ({ comment }) => {
  return (
    <div>
      <p style={{ fontWeight: 'bold' }}> {comment.body}</p>
      <p>Posted: {moment(comment.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')} </p>
      <p>Votes: {comment.votes}</p>
      <p>Created by: {comment.created_by.name}</p>
    </div>
  );
};

SingleComment.propTypes = {
  comment: PropTypes.object
};

export default SingleComment;