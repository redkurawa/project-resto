// resto.ts
export interface Restaurant {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images?: string[]; // Properti ini tidak ada di contoh Anda, jadi buat opsional
  reviewCount?: number; // Properti ini tidak ada, buat opsional
  menuCount?: number; // Properti ini tidak ada, buat opsional
  priceRange?: { min: number; max: number }; // Properti ini tidak ada, buat opsional
  distance?: number; // Properti ini tidak ada, buat opsional
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface Filters {
  range: any;
  priceMin: any;
  priceMax: any;
  rating: any;
}

// Sesuaikan interface ini agar sesuai dengan struktur `data` di dalam respons API
export interface ApiRestoResponse {
  data: {
    filters: Filters;
    pagination: Pagination;
    restaurants: Restaurant[];
  };
  message: string;
  success: boolean;
}
