import Axios from "axios";
import { ApiResponse } from "./Login/User";
const axios = Axios.create({
  baseURL: "https://localhost:3000/",
});

export const http = {
  get: function httpGet<Response = ApiResponse>(url: string) {
    return axios.get<Response>(url).then((res) => res.data);
  },
  post: function httpPost<Request = any, Response = ApiResponse>(
    url: string,
    data?: Request
  ) {
    return axios.post<Response>(url, { data }).then((res) => res.data);
  },
  put: function httpPut<Request = any, Response = ApiResponse>(
    url: string,
    data?: Request
  ) {
    return axios.put<Response>(url, data).then((res) => res.data);
  },
};
