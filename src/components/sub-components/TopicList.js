import React, { Component } from 'react';
import * as api from '../../api';
import { PropTypes } from 'prop-types';

class TopicList extends Component {
  state = {
    topics: []
  }

  componentDidMount() {
    api.fetchTopics()
      .then(topics => {
        this.setState({
          topics
        });
      });
  }

  render() {
    const { topics } = this.state;
    const { changeTopicFilter } = this.props;
    return (
      <div className='topic-list'>
        <h2 className="topic-list-item" onClick={() => changeTopicFilter('none')}>All Topics</h2>
        {topics.map(topic => {
          return <h2 className='topic-list-item' key={topic._id} onClick={() => changeTopicFilter(topic.slug)}>{topic.title}</h2>;
        })}
      </div>
    );
  }
}

TopicList.propTypes = {
  changeTopicFilter: PropTypes.func.isRequired
};

export default TopicList;