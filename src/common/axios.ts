import axios from 'axios';

export const axiosGet = async (url: string, param: any) => {
  return await axios.get<string>(url, param);
};

export const axiosPost = async (url: string, param: any) => {
  return await axios.post<string>(url, param);
};
