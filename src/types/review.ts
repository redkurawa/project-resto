export type RestaurantData = {
  restaurant: {
    id: number;
    name: string;
    star: number;
  };
  reviews: {
    id: number;
    star: number;
    comment: string;
    createdAt: string;
    user: {
      id: number;
      name: string;
    };
  }[];
  statistics: {
    totalReviews: number;
    averageRating: number;
    ratingDistribution: {
      [key: string]: number; // Untuk "1", "2", "3", dst.
    };
  };
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  filter: {
    rating: number | null;
  };
};
