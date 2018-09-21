import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../api';
class Votes extends Component {
  state = {
    voted: false
  }
  render() {
    const { voteNumber } = this.props;
    const { voted } = this.state;
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
    const { changeVote, id, type } = this.props;
    changeVote(value, id);
    if (type === 'article') {
      api.changeArticleVote(value, id);
    } else if (type === 'comment') {
      api.changeCommentVote(value, id);
    }
    this.setState({ voted: true });
  }
}

Votes.propTypes = {
  changeVote: PropTypes.func,
  voteNumber: PropTypes.number,
  id: PropTypes.string,
  type: PropTypes.string
};

export default Votes;