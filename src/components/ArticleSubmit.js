import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';
import { Redirect } from 'react-router-dom';

class ArticleSubmit extends Component {
  state = {
    'article-title': '',
    'article-body': '',
    redirect: ''
  }
  render() {
    const { match } = this.props;
    const { redirect } = this.state;
    return (
      <div>
        {redirect && <Redirect to={`/articles/${redirect}`} />}
        <section className="article-submit">
          <h1>Submit an article about {match.params.topic}!</h1>
          <form>
            <label htmlFor="article-title">Article title:</label>
            <input type="text" name="article-title" id="article-title" placeholder='Enter your article title here' onChange={this.handleChange} value={this.state['article-title']} />
            <br />
            <label htmlFor="article-body">Article body:</label>
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
    api.postArticle(article, match.params.topic)
      .then(article => {
        this.setState({ redirect: article._id });
      });
  }
}

ArticleSubmit.propTypes = {
  loggedInUser: PropTypes.string,
  match: PropTypes.object
};

export default ArticleSubmit;