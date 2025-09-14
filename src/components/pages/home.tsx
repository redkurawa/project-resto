import { GetService } from '@/services/service';
import type { Restaurant } from '@/types/resto';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { RestoNameHeader } from '../resto-name-header';
import { Header } from '../resto-header';
import { RestoNavbar } from '../resto-navbar';
import { RestoFooter } from '../resto-footer';

export const Home = () => {
  const [resto, setResto] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const getResto = async () => {
      try {
        const r = await GetService('resto');
        // const data: Restaurant[] = r.data;
        const data2: Restaurant[] = r.data.restaurants;
        setResto(data2);
        // console.log({ r });
        // console.log({ data });
        console.log({ data2 });
      } catch (err) {
        setError(`gagal load resto :${err}`);
        console.log(error);
      }
    };
    getResto();
  }, []);

  return (
    // useRenderObjectList(resto);
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/hero-burger.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '827px',
        }}
      >
        <Header />
      </div>
      <RestoNavbar />
      <div className='sm-container grid grid-cols-1 gap-5 lg:grid-cols-3'>
        {resto.map((data) => (
          <Link key={data.id} to={`resto/${data.id}`}>
            <div className='hover:border-accent-yellow flex cursor-pointer rounded-2xl p-3 shadow-md hover:border'>
              <RestoNameHeader headers={data} home={true} />
            </div>
          </Link>
        ))}
      </div>
      <RestoFooter />
    </>
  );
};
