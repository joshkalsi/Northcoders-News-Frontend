import React from 'react';
import PropTypes from 'prop-types';
import SingleComment from './SingleComment';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map(comment => {
        return <SingleComment key={comment._id} comment={comment} />;
      })}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array
};

export default CommentList;