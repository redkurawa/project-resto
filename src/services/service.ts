import { api } from './api';

// const GetService = async (queryPath: string = '') => {
const GetService = async (queryPath: string = '', token?: string) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    // const response = await api.get(queryPath);
    const r = await api.get(queryPath, { headers });
    console.log('ser.ts :', { r });
    // console.log('GetService response:', response.data);
    return r.data;
  } catch (error) {
    console.error('Failed to fetch GetService:', error);
    throw error;
  }
};

const PostService = async (queryPath: string = '', payload?: any) => {
  try {
    const r = await api.post(queryPath, payload);
    // console.log('API response:', r.data);
    return r;
  } catch (error) {
    // console.error('Failed to fetch todos:', error);
    throw error;
  }
};

export { GetService, PostService };

// services.ts
// import type { AxiosRequestConfig } from 'axios';
// import { api } from './api';
// // import { AxiosRequestConfig } from 'axios';

// interface ServiceOptions {
//   token?: string;
// }

// const GetService = async (queryPath: string = '', options?: ServiceOptions) => {
//   try {
//     const config: AxiosRequestConfig = {};
//     if (options?.token) {
//       config.headers = {
//         Authorization: `Bearer ${options.token}`,
//       };
//     }
//     const response = await api.get(queryPath, config);
//     return response.data;
//   } catch (error) {
//     console.error('Failed to fetch GetService:', error);
//     throw error;
//   }
// };

// const PostService = async (
//   queryPath: string = '',
//   payload?: any,
//   options?: ServiceOptions
// ) => {
//   try {
//     const config: AxiosRequestConfig = {};
//     if (options?.token) {
//       config.headers = {
//         Authorization: `Bearer ${options.token}`,
//       };
//     }
//     const r = await api.post(queryPath, payload, config);
//     return r;
//   } catch (error) {
//     throw error;
//   }
// };

// export { GetService, PostService };
