import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { changeArticleVote, changeCommentVote } from '../../api';
class Votes extends Component {
  state = {
    voted: false,
    voteValue: ''
  }
  render() {
    let { voteNumber } = this.props;
    const { voted, voteValue } = this.state;
    if (voteValue === 'up') voteNumber++;
    else if (voteValue === 'down') voteNumber--;
    return (
      <div>
        <div className='votes'>
          {!voted
            ? <i onClick={() => this.handleVote('up')} className="fas fa-arrow-circle-up up-on"></i>
            : <i className="fas fa-arrow-circle-up" ></i>}
          <h3>{voteNumber}</h3>
          {!voted
            ? <i onClick={() => this.handleVote('down')} className="fas fa-arrow-circle-down down-on"></i>
            : <i className="fas fa-arrow-circle-down" ></i>}
        </div>

      </div>
    );
  }

  handleVote = (value) => {
    const { id, type } = this.props;
    this.setState({
      voted: true,
      voteValue: value
    }, () => {
      if (type === 'article') {
        changeArticleVote(value, id);
      } else if (type === 'comment') {
        changeCommentVote(value, id);
      }
    });
  }
}

Votes.propTypes = {
  changeVote: PropTypes.func,
  voteNumber: PropTypes.number,
  id: PropTypes.string,
  type: PropTypes.string
};

export default Votes;