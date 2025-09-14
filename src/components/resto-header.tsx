import { Button } from './ui/button';

export const Header = () => {
  return (
    // <div className='sm-container top absolute flex h-20 justify-between'>
    <div className='sm-container sticky top-0 left-0 z-10 flex h-20 w-full justify-between'>
      <div className='flex items-center'>
        <img src='/icons/logo.svg' alt='logo' />
        <span className='ml-2 text-[32px] font-extrabold text-white'>
          Foody
        </span>
      </div>
      <div className='text-md hidden items-center gap-4 md:flex'>
        <Button
          variant={'outline'}
          size={'md'}
          className='cursor-pointer text-neutral-200 hover:border-0 hover:bg-neutral-200/40 hover:text-black'
        >
          Sign In
        </Button>
        <Button
          variant={'secondary'}
          size={'md'}
          className='cursor-pointer hover:bg-neutral-200/30 hover:text-white'
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};
