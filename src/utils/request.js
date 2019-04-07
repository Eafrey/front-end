import axios from "axios";

const REQUEST_METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete"
};

const fetch = (url, options) => {
  const { method = "get", data } = options;
  switch (method) {
    case REQUEST_METHOD.GET: {
      return axios.get(url);
    }
    case REQUEST_METHOD.POST: {
      return axios.post(url, { ...data });
    }
    case REQUEST_METHOD.DELETE:
      return axios.delete(url, { ...data });
    case REQUEST_METHOD.PUT:
      return axios.put(url, { ...data });
    default:
      return axios(options);
  }
};

const handleData = response => {
  return response.data;
};
const handleError = response => {
  console.log("handleError", response);
  return response;
};

const request = (url, options) =>
  fetch(url, options)
    .then(handleData)
    .catch(handleError);

export const get = (url, options) =>
  request(url, { ...options, method: REQUEST_METHOD.GET });

export const post = (url, options) =>
  request(url, { ...options, method: REQUEST_METHOD.POST });

export const put = (url, options) =>
  request(url, { ...options, method: REQUEST_METHOD.PUT });

export const deleted = (url, options) =>
  request(url, { ...options, method: REQUEST_METHOD.DELETE });
