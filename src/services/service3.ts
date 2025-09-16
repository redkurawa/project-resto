import { AxiosError } from 'axios';
import { api } from './api';

async function getService3(url: string, token?: string) {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const r = await api.get(url, { headers });
    console.log('ser3.ts :', { r });
    return {
      data: r.data,
      error: null,
    };
  } catch (err) {
    const error = err as AxiosError;
    return {
      data: null,
      error: error.message || 'Terjadi kesalahan saat mengambil data',
    };
  }
}

export default getService3;
