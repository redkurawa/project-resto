import { GetService } from '@/services/service';
import type { Restaurant } from '@/types/resto';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { RestoNameHeader } from '../resto-name-header';

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
    <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
      {resto.map((data) => (
        <Link key={data.id} to={`resto/${data.id}`}>
          <div className='hover:border-accent-yellow flex cursor-pointer rounded-2xl shadow-md hover:border'>
            <RestoNameHeader headers={data} home={true} />
          </div>
        </Link>
      ))}
    </div>
  );
};
