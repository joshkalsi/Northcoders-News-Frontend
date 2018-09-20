import React, { Component } from 'react';
import './CSS/App.css';
import './CSS/MainNavBar.css';
import './CSS/Homepage.css';
import './CSS/ArticleList.css';
import './CSS/TopicArticles.css';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import TopicArticles from './components/TopicArticles';
import Article from './components/Article';

class App extends Component {
  state = {
    user: ''
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Route exact path='/' render={() => <Homepage user={user} />} />
        <Route exact path='/topics/:topic/articles' render={({ match }) => <TopicArticles match={match} user={user} />} />
        <Route exact path='/articles/:article_id' component={Article} />
      </div>
    );
  }
}

export default App;
