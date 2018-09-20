import React, { Component } from 'react';
import * as api from '../../api';
import { Link } from 'react-router-dom';

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
    return (
      <div className='topic-list'>
        <Link to='/'>
          <h2 className="topic-list-item" >All Topics</h2>
        </Link>
        {topics.map(topic => {
          return (<Link to={`/topics/${topic.slug}/articles`} key={topic._id} >
            <h2 className='topic-list-item'>{topic.title}</h2>
          </Link>);
        })}
      </div>
    );
  }
}

export default TopicList;