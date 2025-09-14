import { footerFood, footerHelp, footerIcons } from '@/types/footer';
import { Logo } from './logo';

export const RestoFooter = () => {
  return (
    <div className='bg-black'>
      <div className='sm-container grid w-full grid-cols-1 justify-between pt-20 pb-31 text-white md:grid-cols-2'>
        <div className='mb-6 max-w-95'>
          <div className='flex items-center gap-4'>
            <Logo className='size-12 text-white' />
            <span className='text-[32px] font-extrabold text-white'>Foody</span>
          </div>
          <div className='mt-5.5 mb-4 md:mb-10'>
            Enjoy homemade flavors & chef’s signature dishes, freshly prepared
            every day. Order online or visit our nearest branch.
          </div>
          <div>
            <div className='mb-5 text-[16px] font-extrabold'>
              Follow on Social Media
            </div>
            <div className='flex gap-3'>
              {footerIcons.map((icon, i) => (
                <div key={i} className='ball size-10 border border-white/30'>
                  <img src={icon} alt={`icon-${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='grid w-full grid-cols-2 text-sm'>
          <div className='w-full'>
            <span className='mb-4 h-7 font-extrabold'>Explore</span>
            <ul>
              {footerFood.map((data, i) => (
                <li key={i} className='my-4'>
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full'>
            <span className='mb-4 h-7 font-extrabold'>Help</span>
            <ul>
              {footerHelp.map((data, i) => (
                <li key={i} className='my-4'>
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
