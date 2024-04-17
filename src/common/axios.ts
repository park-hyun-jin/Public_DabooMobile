import axios from 'axios';
import useStore from '../zustand/store';

export const axiosGet = (url: string, param: any) => {
  const accessToken = useStore(state => state.accessToken);
  return axios.get<string>(`https://dev.da-boo.shop/${url}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: param,
  });
};

export const axiosPost = (url: string, param: any) => {
  const {accessToken} = useStore(state => state);

  return axios.post<string>(`https://dev.da-boo.shop/${url}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: param,
  });
};

export const axiosRefresh = () => {
  const {refreshToken} = useStore(state => state);

  return axios.get<string>('https://dev.da-boo.shop/oauth/token/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
};
