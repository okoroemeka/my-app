import axios from 'axios';

const apiAgent = axios.create({
  baseURL: 'https://qo7vrra66k.execute-api.eu-west-1.amazonaws.com/choco',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiAgent;
