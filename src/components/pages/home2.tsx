import { useAppSelector } from '@/redux/hooks';
import { getResto } from '@/redux/resto-slice';
import type { AppDispatch, RootState } from '@/redux/store';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { Loading } from '../loading';
import { RestoFooter } from '../resto-footer';
import { Header } from '../resto-header';
import { RestoNameHeader } from '../resto-name-header';
import { RestoNavbar } from '../resto-navbar';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const Home2 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.resto
  );
  const [currPage, setCurrPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    dispatch(getResto());
  }, [dispatch]);

  const hndLoadMore = () => {
    setCurrPage((prevPage) => prevPage + 1);
  };

  const displayed = data?.restaurants.slice(0, currPage * perPage) || [];

  const showMoreBtn = displayed.length < (data?.restaurants.length || 0);

  if (loading === 'pending' && displayed.length === 0) {
    return (
      <div>
        <Loading loading={true} />
      </div>
    );
  }

  if (loading === 'failed') {
    return <div>Error:{error}</div>;
  }

  return (
    <>
      <div
        className='relative h-[648px] flex-col md:h-[827px]'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/hero-burger.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
        }}
      >
        <Header home={true} />
        <div className='flex h-full flex-col justify-center p-5.5'>
          <div className='mx-auto w-full max-w-178 text-center text-white'>
            <h1 className='text-4xl font-extrabold md:text-5xl'>
              Explore Culinary Experiences
            </h1>
            <p className='mt-2 mb-10 text-lg font-bold md:text-2xl'>
              Search and refine your choice to discover the perfect restaurant.
            </p>
            <form action='handlesubmit'>
              <div className='mx-auto flex h-14 max-w-151 items-center gap-1.5 rounded-full border bg-white/80 px-6'>
                <Search className='text-neutral-700' />
                <Input
                  className='border-0 text-black'
                  placeholder='Search restaurants, food and drink'
                ></Input>
              </div>
            </form>
          </div>
        </div>
      </div>

      <RestoNavbar />
      <div className='sm-container mb-8 grid grid-cols-1 gap-5 lg:grid-cols-3'>
        <>
          {displayed.map((d) => (
            <Link key={d.id} to={`resto/${d.id}`}>
              <div className='hover:border-accent-yellow/50 shadow-all flex cursor-pointer rounded-2xl p-3 hover:border'>
                <RestoNameHeader headers={d} home={true} />
              </div>
            </Link>
          ))}
        </>
      </div>
      {/* {loading === 'pending' && displayed.length > 0 && <div>Loading more</div>} */}
      {showMoreBtn && (
        <Button
          variant={'outline'}
          className='mx-auto mb-10 block rounded-full px-11 py-1 text-sm md:mb-25 md:px-10 md:py-2 md:text-[16px]'
          onClick={hndLoadMore}
        >
          Load More
        </Button>
      )}

      <RestoFooter />
    </>
  );
};
