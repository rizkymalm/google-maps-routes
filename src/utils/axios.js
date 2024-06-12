import axios from 'axios';

const queryParser = (params) => {
  let queryParams = '';
  for (let key in params) {
    if (!queryParams) {
      queryParams = queryParams.concat(`?${key}=${params[key]}`);
    } else {
      queryParams = queryParams.concat(`&${key}=${params[key]}`);
    }
  }
  return queryParams;
};

const timeoutStandard = 200000;

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const Axios = {
  Get: ({ url, params, token, cancelToken, timeStamp, apiKey }) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: 'GET',
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,
            'x-timestamp': timeStamp,
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
          },
          cancelToken: cancelToken,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },
  Post: ({ url, data, cancelToken, token, timeStamp, apiKey }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,
            'x-timestamp': timeStamp,
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
          },
          cancelToken: cancelToken,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },
  PostFormData: ({ url, data, cancelToken, token, timeStamp, apiKey }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          timeout: timeoutStandard,
          headers: {
            'Content-Type': 'multipart/form-data',
            'x-timestamp': timeStamp,
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
          },
          cancelToken: cancelToken,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },

  Put: ({ url, params, data, token, cancelToken, timeStamp, apiKey }) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: 'PUT',
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,
            'x-timestamp': timeStamp,
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
          },
          cancelToken: cancelToken,
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },
  Patch: ({ url, params, data, cancelToken, token, timeStamp, apiKey }) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: 'PATCH',
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,
            'x-timestamp': timeStamp,
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
          },
          cancelToken: cancelToken,
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },
  Delete: ({ url, params, cancelToken, token, timeStamp, apiKey }) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: 'DELETE',
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,
            'x-timestamp': timeStamp,
            Authorization: `Bearer ${token}`,
            'x-api-key': apiKey,
          },
          cancelToken: cancelToken,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled', error);
          } else {
            reject(error);
          }
        });
    });
  },
  All: ({ promises }) => {
    return new Promise((resolve, reject) => {
      axios
        .all(promises)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default Axios;
