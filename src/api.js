import axios from 'axios';
const DB_URL = 'https://northcoders-news-jk.herokuapp.com/api';

export const fetchArticles = () => {
  return axios.get(`${DB_URL}/articles`)
    .then(({ data }) => data.articles);
};

export const fetchTopics = () => {
  return axios.get(`${DB_URL}/topics`)
    .then(({ data }) => data.topics);
}