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
import User from './components/User';

class App extends Component {
  state = {
    loggedInUser: {}
  }
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Route exact path='/' render={() => <Homepage loggedInUser={loggedInUser} />} />
        <Route exact path='/topics/:topic/articles' render={({ match }) => <TopicArticles match={match} loggedInUser={loggedInUser} />} />
        <Route exact path='/articles/:article_id' render={({ match }) => <Article match={match} loggedInUser={loggedInUser} />} />
        <Route exact path='/users/:username' render={({ match, location }) => <User location={location} match={match} loggedInUser={loggedInUser} />} />
      </div>
    );
  }
}

export default App;
