import { api } from './api';

const GetService = async (queryPath: string = '') => {
  try {
    const response = await api.get(queryPath);
    console.log('GetService response:', response.data);
    return response.data;
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
