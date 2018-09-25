import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import { Redirect } from 'react-router-dom';
import '../CSS/ArticleSubmit.css';
class ArticleSubmit extends Component {
  state = {
    'article-title': '',
    'article-body': '',
    redirect: '',
    error: null
  }
  render() {
    const { match } = this.props;
    const { redirect, error } = this.state;
    return (
      <div>
        {error && <Redirect to={{
          pathname: '/error',
          state: { error: error.response.status }
        }} />}
        {redirect && <Redirect to={`/articles/${redirect}`} />}
        <section className="article-submit">
          <h1>Submit an article about {match.params.topic}!</h1>
          <form>
            <h2>Article title:</h2>
            <input type="text" name="article-title" id="article-title" placeholder='Enter your article title here' onChange={this.handleChange} value={this.state['article-title']} />
            <br />
            <h2>Article body:</h2>
            <textarea name="article-body" id="article-body" placeholder='Enter your article body here' onChange={this.handleChange} value={this.state['article-body']}>
            </textarea>
            <br />
            <button onClick={(e) => this.submitArticle(e)}>Submit</button>
          </form>
        </section>
      </div>
    );
  }

  handleChange = (e) => {
    const { loggedInUser } = this.props;
    if (!loggedInUser) window.alert('You need to log in before submitting an article!');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitArticle = (e) => {
    e.preventDefault();
    const { loggedInUser, match } = this.props;

    const title = this.state['article-title'];
    const body = this.state['article-body'];
    const article = {
      created_by: loggedInUser,
      title,
      body
    };
    if (!loggedInUser) window.alert('You need to log in before submitting an article!');
    else {
      api.postArticle(article, match.params.topic)
        .then(article => {
          this.setState({ redirect: article._id });
        })
        .catch(error => this.setState({ error }));
    }
  }
}

ArticleSubmit.propTypes = {
  loggedInUser: PropTypes.string.isRequired,
  match: PropTypes.object
};

export default ArticleSubmit;