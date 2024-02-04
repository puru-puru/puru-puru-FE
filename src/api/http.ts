import Axios from "axios";
const axios = Axios.create({
  baseURL: "",
});

export const http = {
  get: function httpGet<Response = unknown>(url: string) {
    return axios.get<Response>(url).then((res) => res.data);
  },
  post: function httpPost<Request = any, Response = unknown>(
    url: string,
    data?: Request
  ) {
    return axios.post<Response>(url, { data }).then((res) => res.data);
  },
  put: function httpPut<Request = any, Response = unknown>(
    url: string,
    data?: Request
  ) {
    return axios.put<Response>(url, data).then((res) => res.data);
  },
};
