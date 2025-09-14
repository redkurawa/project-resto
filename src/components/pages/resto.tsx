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

const Resto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<any>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const r = await GetService(`resto/${id}`);
      setDetail(r.data);
    };
    fetchDetail();
  }, [id]);

  if (!detail) return <div className='p-4'>Loading...</div>;

  return (
    <div className='sm-container mx-auto'>
      <Header />
      <HeroImageResto urls={detail.images} />
      <RestoNameHeader headers={detail} />

      <div className='mb-6 grid grid-cols-2 gap-4 text-sm text-gray-700'>
        {detail.menus.map((menu: MenuItem) => (
          <div key={menu.id}>
            <div>{menu.id}</div>
            <div>{menu.foodName}</div>
            <div>{menu.price}</div>
            <div>{menu.type}</div>
            <div>{menu.image}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resto;
