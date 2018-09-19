import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => {
        return (<div key={comment._id} className="comment">
          <p style={{ fontWeight: 'bold' }}> {comment.body}</p>
          <p>Posted: {moment(comment.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')} </p>
          <p>Votes: {comment.votes}</p>
          <p>Created by: {comment.created_by.name}</p>
        </div>);
      })}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array
};

export default CommentList;