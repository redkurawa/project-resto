import { useAppSelector } from '@/redux/hooks';
import { GetService } from '@/services/service';
import type { RestaurantData } from '@/types/review';
import { useEffect, useState } from 'react';

const App3 = () => {
  const { token } = useAppSelector((state) => state.auth);
  const [data, setData] = useState<RestaurantData | null>(null); // Tambahkan tipe
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Reset error state
      try {
        if (token) {
          const response = await GetService(`review/restaurant/31`, token);
          console.log(response.data);
          if (response.data) {
            setData(response.data as RestaurantData);
          } else {
            setError(response.error || 'No data received from the server');
          }
        } else {
          setError('Authentication token is missing');
        }
      } catch (err) {
        setError('Failed to fetch reviews. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchData();
    } else {
      setError('Authentication token is missing');
      setIsLoading(false);
    }
  }, [token]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div>
      <h1>{data.restaurant.id}</h1>
      <p>Rating: {data.restaurant.star} stars</p>
      <h2>Reviews:</h2>
      {data.reviews.length > 0 ? (
        <ul>
          {data.reviews.map((review) => (
            <li key={review.id}>
              {review.user.name}: {review.comment} ({review.star} stars)
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
      <p>Total Reviews: {data.statistics.totalReviews}</p>
      <p>Average Rating: {data.statistics.averageRating}</p>
    </div>
  );
};

export default App3;
