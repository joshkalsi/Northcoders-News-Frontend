import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleComment from './SingleComment';
import moment from 'moment';
import _ from 'lodash';

class CommentList extends Component {
  state = {
    sortOrder: 'recent'
  }
  render() {
    let { sortOrder } = this.state;
    let { comments } = this.props;
    const sortRecent = (a, b) => {
      if (moment(a.created_at).isBefore(moment(b.created_at))) return 1;
      else return -1;
    };
    const sortVotes = (a, b) => {
      return b.votes - a.votes;
    };

    if (sortOrder === 'recent') comments = comments.sort(sortRecent);
    else if (sortOrder === 'votes') comments = comments.sort(sortVotes);
    else if (sortOrder === 'random') comments = _.shuffle(comments);
    return (
      <div>
        <div className="sort-order">
          <p onClick={() => this.changeSortOrder('recent')} className="sort-recent">Recent</p>
          <p onClick={() => this.changeSortOrder('votes')} className="sort-votes">Most Votes</p>
        </div>
        {comments.map(comment => {
          return <SingleComment key={comment._id} comment={comment} />;
        })}
      </div>
    );
  }

  changeSortOrder = (order) => {
    this.setState({
      sortOrder: order
    });
  }
}

CommentList.propTypes = {
  comments: PropTypes.array
};

export default CommentList;