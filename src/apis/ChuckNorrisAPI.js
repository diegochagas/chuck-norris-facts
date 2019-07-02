import axios from 'axios';

const instance = axios.create({ baseURL: 'https://api.chucknorris.io/jokes' });

export const categories = async () => await instance.get(`/categories`);

export const randomJoke = async category => await instance.get(`/random?category=${category}`);