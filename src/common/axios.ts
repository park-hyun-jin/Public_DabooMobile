import axios from 'axios';

export const axiosGet = (url: string, param: any) => {
  return axios.get<string>(`https://dev.da-boo.shop/${url}`, param);
};

export const axiosPost = (url: string, param: any) => {
  return axios.post<string>(`https://dev.da-boo.shop/${url}`, param);
};
