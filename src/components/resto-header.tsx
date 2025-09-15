import { Link } from 'react-router';
import { Button } from './ui/button';
import { useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import CartIcon from './card-icon';

type HomeProps = {
  home?: boolean;
};

type Props = {
  isScroll?: boolean;
};

export const Header = ({ home = false }: HomeProps) => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return home ? (
    <div
      className={`fixed top-0 left-0 z-10 h-20 w-full transition-all duration-300 ${isScroll ? 'bg-white/60' : 'bg-transparent'}`}
    >
      <div className='sm-container flex justify-between pt-4'>
        <HeaderContent isScroll={isScroll} />
      </div>
    </div>
  ) : (
    <div
      className={`sm-container sticky top-0 left-0 z-10 flex h-20 w-full justify-between transition-all duration-300 ${isScroll ? 'bg-white/60' : 'bg-transparent'}`}
    >
      <HeaderContent isScroll={isScroll} />
    </div>
  );
};

const HeaderContent = ({ isScroll = false }: Props) => {
  const { token, user } = useAppSelector((state) => state.auth);
  return (
    <>
      <div className='flex items-center'>
        <img src='/icons/logo.svg' alt='logo' />
        <span
          className={`ml-2 text-[32px] font-extrabold ${isScroll ? 'text-black' : 'text-white'}`}
        >
          Foody
        </span>
      </div>
      {token ? (
        <div
          className={`flex items-center gap-6 ${isScroll ? 'text-black' : 'text-white'}`}
        >
          <CartIcon />
          <p>{user?.name}</p>
        </div>
      ) : (
        <>
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
    </>
  );
};
