// import { useRenderObjectList } from '@/hook/useRenderObjectList';
// import { GetService } from '@/services/service';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';

// const Resto: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const [detail, setDetail] = useState<any>(null);
//   useEffect(() => {
//     const restoId = async () => {
//       const r = await GetService(`resto/${id}`);
//       setDetail(r.data);
//       console.log('Fetched detail:', detail);
//     };
//     restoId();
//   }, []);

//   useEffect(() => {
//     if (detail) {
//       console.log('Updated detail:', detail);
//     }
//   }, [detail]);

//   return (
//     <>
//       <div className='flex'>

//       </div>
//     </>
//   );
// };

// export default Resto;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { GetService } from '@/services/service';
import HeroImageResto from '../resto-detail-images-layout';
import { RestoNameHeader } from '../resto-name-header';
import type { MenuItem } from '@/types/resto';
import { Header } from '../resto-header';
import { RestoFooter } from '../resto-footer';
import { formatRupiah } from '@/utils/formatRp';
import { Loading } from '../loading';

const Resto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const r = await GetService(`resto/${id}`);
        setDetail(r.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (!detail) return <Loading loading={loading} />;

  return (
    <>
      <div className='sm-container mx-auto'>
        <Header />
        <HeroImageResto urls={detail.images} />
        <div className='border-b pb-8'>
          <RestoNameHeader headers={detail} />
        </div>

        <div className='mt-8 mb-6 grid grid-cols-2 gap-4 text-sm text-gray-700 md:grid-cols-4'>
          {detail.menus.map((menu: MenuItem) => (
            <div key={menu.id} className='shadow-all rounded-t-2xl'>
              <img
                src={menu.image}
                alt=''
                className='h-[285px] w-full rounded-t-2xl object-cover'
              />
              <div className='p-4'>
                <div className='text-[16px]'>{menu.foodName}</div>
                <div className='text-lg font-extrabold'>
                  {formatRupiah(menu.price)}
                </div>
              </div>
              {/* <div>{menu.id}</div> */}
              {/* <div>{menu.type}</div> */}
            </div>
          ))}
        </div>
      </div>
      <RestoFooter />
    </>
  );
};

export default Resto;
