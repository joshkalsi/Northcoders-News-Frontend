import React, { Component } from 'react';
import ArticleList from './sub-components/ArticleList';
import TopicList from './sub-components/TopicList';
import '../CSS/Homepage.css';
class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="homepage-content">
          <section className='homepage articles'>
            <ArticleList topic={'none'} />
          </section>
          <section className='homepage topic-list'>
            <TopicList />
          </section>
        </div>
      </div>
    );
  }

}
export default Homepage;