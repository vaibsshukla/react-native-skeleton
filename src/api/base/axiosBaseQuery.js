import axios from 'axios';

export const baseURL = 'https://fakestoreapi.com';
axios.defaults.baseURL = baseURL;

export const axiosBaseQuery =
  ({baseUrl, prepareHeaders}) =>
  async ({url, method, body: data, params, ...rest}, api) => {
    let interceptor;
    try {
      // this to allow prepare headers
      if (prepareHeaders) {
        interceptor = axios.interceptors.request.use(config => {
          const newHeaders = prepareHeaders(config.headers, api);
          config.headers = {...config.headers, ...newHeaders};
          return config;
        });
      }

      const result = await axios({
        // timeout: 2000,
        url,
        baseURL: baseUrl,
        method,
        data,
        params,
        ...rest,
        signal: api.signal,
      });
      return {
        data: result.data,
        meta: {
          headers: result.headers,
          status: result.status,
          config: result.config,
          request: result.request,
        },
      };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || {message: err.message},
          headers: err.response?.headers,
        },
      };
    } finally {
      axios.interceptors.request.eject(interceptor);
    }
  };

export default axiosBaseQuery;
