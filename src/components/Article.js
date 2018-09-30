import React, { Component } from 'react';
import { fetchSingleArticle } from '../api';
import PropTypes from 'prop-types';
import SingleArticle from './sub-components/SingleArticle';
import CommentList from './sub-components/CommentList';
import { Link, Redirect } from 'react-router-dom';

import '../CSS/Article.css';

class Article extends Component {
  state = {
    article: {},
    error: null,
  }

  componentDidMount() {
    const { match } = this.props;
    const { article_id } = match.params;
    fetchSingleArticle(article_id)
      .then((article) => {
        this.setState({
          article
        });
      })
      .catch((error) => this.setState({ error }));
  }
  render() {
    const { article, error } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        {error && <Redirect to={{
          pathname: '/error',
          state: { error: error.response.status }
        }} />}
        <SingleArticle article={article} />
        <Link to={`/topics/${article.belongs_to}/articles`}>
          <h2 className='return-link'> Back to articles</h2>
        </Link>
        <CommentList articleID={article._id} loggedInUser={loggedInUser} />
      </div>
    );
  }
}

Article.propTypes = {
  match: PropTypes.object,
  loggedInUser: PropTypes.string
};

export default Article;