import dotenv from 'dotenv';

dotenv.config();

const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;

console.log('url', API_BASE_URL);
export default {
  API_BASE_URL,
};
