import { extractFileName } from '@/utils/extract-file-name';
import type React from 'react';

// interface dataUrl {
//   data: string;
// }

interface HeroProps {
  urls: string[];
}

const HeroImageResto: React.FC<HeroProps> = ({ urls }) => {
  console.log({ urls });
  return (
    <div className='mx-auto my-5 flex h-[260px] max-w-[1200px] flex-row gap-2 md:h-[470px]'>
      <div className='h-full w-full flex-1 overflow-hidden rounded-lg shadow-lg md:min-w-[450px]'>
        <img
          src={urls[0]}
          alt={extractFileName(urls[0])}
          className='h-full w-full object-cover'
        />
      </div>

      <div className='hidden min-w-[300px] flex-col gap-2 md:flex md:flex-1'>
        <div className='h-[300px] flex-1 overflow-hidden rounded-lg shadow-lg'>
          <img
            src={urls[0]}
            alt={extractFileName(urls[0])}
            className='h-full w-full object-cover'
          />
        </div>

        <div className='flex flex-1 flex-row gap-2'>
          <div className='h-[235px] flex-1 overflow-hidden rounded-lg shadow-lg'>
            <img
              src={urls[1]}
              alt={extractFileName(urls[1])}
              className='h-full w-full object-cover'
            />
          </div>

          <div className='h-[235px] flex-1 overflow-hidden rounded-lg shadow-lg'>
            <img
              src={urls[2]}
              alt={extractFileName(urls[2])}
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroImageResto;
