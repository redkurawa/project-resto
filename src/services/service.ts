import { api } from './api';

const GetService = async (queryPath: string = '', token?: string) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const r = await api.get(queryPath, { headers });
    // console.log('service.ts :', { r });
    return r.data;
  } catch (error) {
    console.error('Failed to fetch GetService:', error);
    throw error;
  }
};

const PostService = async (queryPath: string = '', payload?: any) => {
  try {
    const r = await api.post(queryPath, payload);
    return r;
  } catch (error) {
    throw error;
  }
};

export { GetService, PostService };
