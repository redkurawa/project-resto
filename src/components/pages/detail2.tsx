import { setMenus } from '@/redux/menu-slice';
import type { RootState } from '@/redux/store';
import { GetService } from '@/services/service';
import { menuTypes, type MenuItem } from '@/types/resto';
import { extractFileName } from '@/utils/extract-file-name';
import { formatRupiah } from '@/utils/format-rp';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Loading } from '../loading';
import HeroImageResto from '../resto-detail-images-layout';
import { RestoFooter } from '../resto-footer';
import { Header } from '../resto-header';
import { RestoNameHeader } from '../resto-name-header';
// import App3 from './tes3';
import RestoReview from '../resto-review';

const Resto: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0);

  const updatedMenuType = ['All', ...menuTypes];
  const dispatch = useDispatch();
  const allMenus = useSelector((state: RootState) => state.menus.items);

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

  const handleClick = (i: number) => {
    setActiveMenu(i);
    console.log(`tombol ${updatedMenuType[i]} di klik`);
  };

  const filteredMenus =
    activeMenu === 0
      ? allMenus
      : allMenus.filter((menu) => menu.type === menuTypes[activeMenu - 1]);

  return (
    <>
      <div className='sm-container mx-auto'>
        <Header />
        <HeroImageResto urls={detail.images} />
        <div className='border-b pb-8'>
          <RestoNameHeader headers={detail} />
        </div>

        <div className='mt-5 flex flex-wrap gap-2 text-sm sm:gap-4 sm:text-[16x]'>
          {updatedMenuType.map((menu, i) => (
            <div
              key={i}
              className={`cursor-pointer rounded-2xl border px-2 py-1 sm:px-4 ${
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

        <div className='mt-8 mb-28 grid grid-cols-2 gap-4 text-sm text-gray-700 md:grid-cols-4'>
          {filteredMenus.map((menu: MenuItem) => (
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
            </div>
          ))}
        </div>
        <RestoReview id={id} />
        {/* {id ? <RestoReview id={id} /> : <>Review tidak ada</>} */}
      </div>
      <RestoFooter />
    </>
  );
};

export default Resto;
