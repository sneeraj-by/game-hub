import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fa810731a8e94222b4e7cf9835b90c5b',
    //  mine, below are using mosh's key
    // key: 'c7b18323a47d40c394ea5b019646b1f5',
  },
});
