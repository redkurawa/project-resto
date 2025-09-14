import { GetService } from '@/services/service';
import type { Restaurant } from '@/types/resto';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Loading } from '../loading';
import { RestoFooter } from '../resto-footer';
import { Header } from '../resto-header';
import { RestoNameHeader } from '../resto-name-header';
import { RestoNavbar } from '../resto-navbar';

export const Home = () => {
  const [resto, setResto] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResto = async () => {
      try {
        const r = await GetService('resto');
        const data: Restaurant[] = r.data.restaurants;
        setResto(data);
        // console.log({ data });
      } catch (err) {
        setError(`gagal load resto :${err}`);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getResto();
  }, []);

  console.log({ resto });

  return (
    <>
      <div
        className='h-[648px] md:h-[827px]'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/hero-burger.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
        }}
      >
        <Header />
      </div>

      <RestoNavbar />
      <Loading loading={loading} />
      <div className='sm-container grid grid-cols-1 gap-5 lg:grid-cols-3'>
        {loading ? (
          <Loading />
        ) : (
          <>
            {resto.map((data) => (
              <Link key={data.id} to={`resto/${data.id}`}>
                <div className='hover:border-accent-yellow/50 shadow-all flex cursor-pointer rounded-2xl p-3 hover:border'>
                  <RestoNameHeader headers={data} home={true} />
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
      <RestoFooter />
    </>
  );
};
