import axios from 'axios';
const DB_URL = 'https://northcoders-news-jk.herokuapp.com/api';

export const fetchArticles = () => {
  return axios.get(`${DB_URL}/articles`)
    .then(({ data }) => data.articles);
};

export const fetchTopics = () => {
  return axios.get(`${DB_URL}/topics`)
    .then(({ data }) => data.topics);
};

export const fetchSingleArticle = (article_id) => {
  return axios.get(`${DB_URL}/articles/${article_id}`)
    .then(({ data }) => data.article);
};

export const fetchCommentsforArticle = (article_id) => {
  return axios.get(`${DB_URL}/articles/${article_id}/comments`)
    .then(({ data }) => data.comments);
};

export const fetchUser = (username) => {
  return axios.get(`${DB_URL}/users/${username}`)
    .then(({ data }) => data.user);
};

export const postArticle = (article, topic) => {
  return axios.post(`${DB_URL}/topics/${topic}/articles`, article)
    .then(({ data }) => data.article);
};

export const postComment = (comment, articleID) => {
  return axios.post(`${DB_URL}/articles/${articleID}/comments`, comment)
    .then(({ data }) => data.comment);
};

export const changeArticleVote = (value, articleID) => {
  return axios.patch(`${DB_URL}/articles/${articleID}?vote=${value}`)
    .then(({ data }) => data.article);
};