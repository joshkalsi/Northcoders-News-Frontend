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
import ArticleSubmit from './components/ArticleSubmit';
import MainNavBar from './components/sub-components/MainNavBar';
import Error from './components/Error';
import * as api from './api';

class App extends Component {
  state = {
    loggedInUser: ''
  }
  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Route path='/' render={() => <MainNavBar loggedInUser={loggedInUser} userLogin={this.userLogin} />} />
        <Route exact path='/' render={() => <Homepage loggedInUser={loggedInUser} />} />
        <Route exact path='/topics/:topic/articles' render={({ match }) => <TopicArticles match={match} loggedInUser={loggedInUser} />} />
        <Route exact path='/articles/:article_id' render={({ match }) => <Article match={match} loggedInUser={loggedInUser} />} />
        <Route exact path='/users/:username' render={({ match }) => <User match={match} loggedInUser={loggedInUser} />} />
        <Route exact path='/topics/:topic/articles/submit' render={({ match }) => <ArticleSubmit match={match} loggedInUser={loggedInUser} />} />
        <Route exact path='/error' component={Error} />
      </div>
    );
  }

  userLogin = (username, logoutCheck = false) => {
    if (logoutCheck) this.setState({ loggedInUser: '' });
    else {
      api.fetchUser(username)
        .then(() => {
          this.setState({ loggedInUser: username });
        })
        .catch(() => alert('User does not exist!'));
    }
  }

}

export default App;
