import React, { Component } from 'react';
import './CSS/App.css';
import './CSS/MainNavBar.css';
import './CSS/Homepage.css';
import './CSS/ArticleList.css';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Topics from './components/Topics';
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
        <Route exact path='/topics' render={() => <Topics user={user} />} />
        <Route exact path='/articles/:article_id' component={Article} />
      </div>
    );
  }
}

export default App;
