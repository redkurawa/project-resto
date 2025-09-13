import { Button } from '../ui/button';

export const Header = () => {
  return (
    <div className='sm-container flex h-20 justify-between'>
      <div className='flex items-center'>
        <img src='./icons/logo.svg' alt='logo' />
        <span className='ml-2 text-[32px] font-extrabold text-white'>
          Foody
        </span>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant={'outline'}>Sign In</Button>
        <Button variant={'secondary'}>Sign Up</Button>
      </div>
    </div>
  );
};
