import axios from 'axios';

export const axiosGet = async (url: string, param: any) => {
  return await axios.get<string>(`https://dev.da-boo.shop/${url}`, param);
};

export const axiosPost = async (url: string, param: any) => {
  return await axios.post<string>(`https://dev.da-boo.shop/${url}`, param);
};
