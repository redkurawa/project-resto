import { useAppSelector } from '@/redux/hooks';
import { GetService } from '@/services/service';
import type { RestaurantData } from '@/types/review';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

interface RestoReviewProps {
  id?: string;
}

// const RestoReview = (id: string) => {
const RestoReview: React.FC<RestoReviewProps> = ({ id }) => {
  const { token } = useAppSelector((state) => state.auth);
  const [data, setData] = useState<RestaurantData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null); // Reset error state
      try {
        if (token) {
          const response = await GetService(`review/restaurant/${id}`, token);
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
    <div className='border-t py-12'>
      <h1 className='mb-2 text-2xl font-extrabold md:text-4xl'>Review</h1>
      <div className='mb-6 flex items-center gap-1 text-[16px] font-extrabold'>
        <img src='/icons/star.svg' />
        <p>{data.statistics.averageRating}</p>
        <p> {`(${data.statistics.totalReviews} Ulasan)`}</p>
      </div>

      {data.reviews.length > 0 ? (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          {data.reviews.map((review) => (
            <div
              key={review.id}
              className='shadow-all w-full rounded-2xl border p-4'
            >
              <div className='text-lg font-extrabold'>{review.user.name}</div>
              <div className='text-[16px] font-normal'>
                {dayjs(review.createdAt).format('DD MMMM YYYY, HH:mm')}
              </div>
              <div className='mt-8 mb-2'>({review.star} stars)</div>
              <div className='text-[16px] font-normal'>{review.comment}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available</p>
      )}

      {/* <h1>{data.restaurant.id}</h1> */}
      {/* <h1>{data.restaurant.name}</h1> */}
      {/* <p>Rating: {data.restaurant.star} stars</p> */}
      {/* <h2>Reviews:</h2> */}
    </div>
  );
};

export default RestoReview;
