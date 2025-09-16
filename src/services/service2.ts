import { api } from './api'; // Mengimpor instance Axios dari api.ts
import { type AxiosResponse, AxiosError } from 'axios';

// Tipe generik untuk respons data
interface ServiceResponse<T> {
  data: T | null;
  error: string | null;
}

// Fungsi getService
async function getService<T>(
  url: string,
  token?: string | null | undefined
): Promise<ServiceResponse<T>> {
  try {
    // Konfigurasi header untuk Authorization jika token diberikan
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    // Melakukan GET request dengan instance Axios dari api.ts
    const response: AxiosResponse<T> = await api.get(url, { headers });

    // Mengembalikan data jika berhasil
    return {
      data: response.data,
      error: null,
    };
  } catch (err) {
    // Menangani error
    const error = err as AxiosError;
    return {
      data: null,
      error: error.message || 'Terjadi kesalahan saat mengambil data',
    };
  }
}

export default getService;
