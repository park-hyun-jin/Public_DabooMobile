import axios from 'axios';

export const axiosGet = (url: string, param: any, accessToken: any) => {
  return axios.get<any>(`http://10.0.2.2:8080/${url}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: param,
  });
};

export const axiosPost = (url: string, param: any, accessToken: any) => {
  return axios.post<any>(`http://10.0.2.2:8080/${url}`, 
  param,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const axiosRefresh = (refreshToken: any) => {

  return axios.get<any>('http://10.0.2.2:8080/oauth/token/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
};

// axios.interceptors.request.use(async (config) => {
//   const { accessToken } = await getToken();
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use((response) => {
//   return response;
// }, async (error) => {
//   const originalRequest = error.config;
//   if (error.response.status === 401 && !originalRequest._retry) {
//     console.log('여기다..');
//     originalRequest._retry = true;
//     const { refreshToken } = await getToken();
//     const newTokens = await refreshAccessToken(refreshToken);
//     if (newTokens) {
//       await setToken(newTokens.accessToken, newTokens.refreshToken);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${newTokens.accessToken}`;
//       return axios(originalRequest);
//     }
//   }
//   return Promise.reject(error);
// });

// const refreshAccessToken = async (refreshToken : any) => {
//   try {
//     const response = await axios.post('http://10.0.2.2:8080/oauth/token/refresh', { refreshToken });
//     return {
//       accessToken: response.data.accessToken,
//       refreshToken: response.data.refreshToken
//     };
//   } catch (error) {
//     clearToken();
//     throw new Error('Unable to refresh token, please login again');
//   }
// };
