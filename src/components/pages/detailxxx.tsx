import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { GetService } from '@/services/service';
import HeroImageResto from '../resto-detail-images-layout';
import { RestoNameHeader } from '../resto-name-header';
import { menuTypes, type MenuItem } from '@/types/resto';
import { Header } from '../resto-header';
import { RestoFooter } from '../resto-footer';
import { formatRupiah } from '@/utils/format-rp';
import { Loading } from '../loading';
import { extractFileName } from '@/utils/extract-file-name';
import { setMenus } from '@/redux/menu-slice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';

const RestoTidakDiPakai: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0);

  const updatedMenuType = ['All', ...menuTypes];
  const dispatch = useDispatch();
  // const menus = useSelector((state: RootState) => state.menus.items);
  let menus = useSelector((state: RootState) =>
    state.menus.items.filter((menu) => menu.type === 'side')
  );

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const r = await GetService(`resto/${id}`);
        setDetail(r.data);
        dispatch(setMenus(r.data.menus));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (!detail) return <Loading loading={loading} />;
  console.log({ detail });

  const handleClick = (i: number) => {
    setActiveMenu(i);
    // console.log(`tombol${i + 1} diklik`);
    console.log(`tombol ${menuTypes[i]} di klik`);
    menus = useSelector((state: RootState) =>
      state.menus.items.filter((menu) => menu.type === menuTypes[i])
    );
  };

  return (
    <>
      <div className='sm-container mx-auto'>
        <Header />
        <HeroImageResto urls={detail.images} />
        <div className='border-b pb-8'>
          <RestoNameHeader headers={detail} />
        </div>
        {/* pilihan tipe menu */}
        {/* <div className='mt-4 md:mt-8'>
          <h1 className='text-2xl font-extrabold md:text-4xl'>Menu</h1>
          {menuTypes.map((tipe) => (
            <div>{tipe}</div>
          ))}
        </div> */}

        <div className='mt-5 flex gap-4 text-sm md:text-[16x]'>
          {updatedMenuType.map((menu, i) => (
            <div
              key={i}
              className={`cursor-pointer rounded-2xl border px-4 py-1 ${
                activeMenu === i
                  ? 'text-primary-100 border-primary-100 bg-[#FFECEC] font-bold'
                  : 'bg-white font-semibold text-black'
              }`}
              onClick={() => handleClick(i)}
            >
              {menu}
            </div>
          ))}
        </div>

        {/* end pilih tipe menu */}
        <div className='mt-8 mb-6 grid grid-cols-2 gap-4 text-sm text-gray-700 md:grid-cols-4'>
          {/* {detail.menus.map((menu: MenuItem) => ( */}
          {menus.map((menu: MenuItem) => (
            <div key={menu.id} className='shadow-all rounded-t-2xl'>
              <img
                src={menu.image}
                alt={extractFileName(menu.image)}
                className='h-43 w-full rounded-t-2xl object-cover md:h-71'
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

export default RestoTidakDiPakai;
