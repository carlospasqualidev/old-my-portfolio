import axios from 'axios';

export const Api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://suloxidos-sandbox.herokuapp.com/api'
      : 'http://localhost:8080/api',
});

Api.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (config: any) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, no-param-reassign
    config.headers.authorization! = `Bearer ${localStorage.getItem(
      'authToken',
    )}`;

    return config;
  },
  (error) => Promise.reject(error),
);
