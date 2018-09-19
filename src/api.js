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