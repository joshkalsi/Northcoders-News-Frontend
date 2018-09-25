import React, { Component } from 'react';
import { fetchTopics } from '../../api';
import { Link, Redirect } from 'react-router-dom';

class TopicList extends Component {
  state = {
    topics: [],
    error: null
  }

  componentDidMount() {
    fetchTopics()
      .then(topics => {
        this.setState({
          topics
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { topics, error } = this.state;
    return (
      <div className='topic-list'>
        {error && <Redirect to={{
          pathname: '/error',
          state: { error: error.response.status }
        }} />}
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