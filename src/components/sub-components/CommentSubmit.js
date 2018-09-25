import React, { Component } from 'react';
import * as api from '../../api';
import PropTypes from 'prop-types';

class CommentSubmit extends Component {
  state = {
    'comment-body': ''
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="comment-body">Leave a comment:</label>
          <input type="text" name="comment-body" id="comment-body" value={this.state['comment-body']} onChange={this.handleChange} />
          <button onClick={this.submitComment}>Submit</button>
        </form>
      </div>
    );
  }

  handleChange = (e) => {
    const { loggedInUser } = this.props;
    if (!loggedInUser) window.alert('You need to be logged in to add a comment!');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitComment = (e) => {
    e.preventDefault();
    const { loggedInUser, articleID, addNewComment } = this.props;

    const body = this.state['comment-body'];
    const comment = {
      created_by: loggedInUser,
      body
    };
    if (!loggedInUser) window.alert('You need to be logged in to add a comment!');
    else {
      api.postComment(comment, articleID)
        .then((comment) => {
          addNewComment(comment);
          this.setState({
            'comment-body': ''
          });
        }).catch(error => this.setState({ error }));
    }
  }
}

CommentSubmit.propTypes = {
  loggedInUser: PropTypes.string,
  articleID: PropTypes.string,
  addNewComment: PropTypes.func
};

export default CommentSubmit;