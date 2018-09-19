import React, { Component } from 'react';
import './CSS/App.css';
import './CSS/MainNavBar.css';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Topics from './components/Topics';

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
      </div>
    );
  }
}

export default App;
