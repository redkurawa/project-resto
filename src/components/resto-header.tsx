import { Link } from 'react-router';
import { Button } from './ui/button';
import { useAppSelector } from '@/redux/hooks';

export const Header = () => {
  const { token, user } = useAppSelector((state) => state.auth);

  return (
    // <div className='sm-container top absolute flex h-20 justify-between'>
    <div className='sm-container sticky top-0 left-0 z-10 flex h-20 w-full justify-between'>
      <div className='flex items-center'>
        <img src='/icons/logo.svg' alt='logo' />
        <span className='ml-2 text-[32px] font-extrabold text-white'>
          Foody
        </span>
      </div>
      {token ? (
        <div className='flex items-center gap-6 text-white'>
          <img src='/icons/cart.svg' alt='card' />
          <p>{user?.name}</p>
        </div>
      ) : (
        <>
          <div className='text-white'>tidak ada isi</div>
          <div className='text-md hidden items-center gap-4 md:flex'>
            <Button
              variant={'outline'}
              size={'md'}
              className='cursor-pointer text-neutral-200 hover:border-0 hover:bg-neutral-200/40 hover:text-black'
            >
              <Link to='/login2'>Sign In</Link>
            </Button>
            <Button
              variant={'secondary'}
              size={'md'}
              className='cursor-pointer hover:bg-neutral-200/30 hover:text-white'
            >
              Sign Up
            </Button>
          </div>
        </>
      )}
      <div className={`${token ? 'hidden' : 'block'}`}></div>
    </div>
  );
};
