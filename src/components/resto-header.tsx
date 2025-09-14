import { Button } from './ui/button';

export const Header = () => {
  return (
    <div className='sm-container flex h-20 justify-between'>
      <div className='flex items-center'>
        <img src='/icons/logo.svg' alt='logo' />
        <span className='ml-2 text-[32px] font-extrabold text-white'>
          Foody
        </span>
      </div>
      <div className='text-md flex items-center gap-4'>
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
