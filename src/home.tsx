import { Link } from 'react-router';
import { Button } from './components/ui/button';

export const Home = () => {
  return (
    <div className='flex-center'>
      <Button>
        <Link to='/login'>Login</Link>
      </Button>
    </div>
  );
};
