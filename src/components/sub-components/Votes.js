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
        <h3>Votes: {voteNumber}</h3>
        {!voted &&
          <div>
            <button onClick={() => this.handleVote('up')}>Up</button>
            <button onClick={() => this.handleVote('down')}>Down</button>
          </div>
        }
      </div>
    );
  }

  handleVote = (value) => {
    const { changeVote, id } = this.props;
    changeVote(value);
    api.changeArticleVote(value, id);
    this.setState({ voted: true });
  }
}

Votes.propTypes = {
  changeVote: PropTypes.func,
  voteNumber: PropTypes.number,
  id: PropTypes.string
};

export default Votes;