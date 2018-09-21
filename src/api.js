import axios from 'axios';
const DB_URL = 'https://northcoders-news-jk.herokuapp.com/api';

const withErrorHandling = (func) => {
  return function (...args) {
    return func(...args).catch(err => { throw err; });
  };
};

export const fetchArticles = withErrorHandling(() => {
  return axios.get(`${DB_URL}/articles`)
    .then(({ data }) => data.articles);
});

export const fetchTopics = withErrorHandling(() => {
  return axios.get(`${DB_URL}/topics`)
    .then(({ data }) => data.topics);
});

export const fetchSingleArticle = withErrorHandling((article_id) => {
  return axios.get(`${DB_URL}/articles/${article_id}`)
    .then(({ data }) => data.article);
});

export const fetchCommentsforArticle = withErrorHandling((article_id) => {
  return axios.get(`${DB_URL}/articles/${article_id}/comments`)
    .then(({ data }) => data.comments);
});

export const fetchUser = withErrorHandling((username) => {
  return axios.get(`${DB_URL}/users/${username}`)
    .then(({ data }) => data.user);
});

export const postArticle = withErrorHandling((article, topic) => {
  return axios.post(`${DB_URL}/topics/${topic}/articles`, article)
    .then(({ data }) => data.article);
});

export const postComment = withErrorHandling((comment, articleID) => {
  return axios.post(`${DB_URL}/articles/${articleID}/comments`, comment)
    .then(({ data }) => data.comment);
});

export const changeArticleVote = withErrorHandling((value, articleID) => {
  return axios.patch(`${DB_URL}/articles/${articleID}?vote=${value}`)
    .then(({ data }) => data.article);
});

export const changeCommentVote = withErrorHandling((value, commentID) => {
  return axios.patch(`${DB_URL}/comments/${commentID}?vote=${value}`)
    .then(({ data }) => data.comment);
});

export const deleteComment = withErrorHandling((commentID) => {
  return axios.delete(`${DB_URL}/comments/${commentID}`)
    .then(({ data }) => data.comment);
});