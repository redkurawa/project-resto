import { Route, Routes } from 'react-router';
import CartList from './components/pages/cart';
import Resto from './components/pages/detail2';
import { Home2 } from './components/pages/home2';
import Login2 from './components/pages/login2';

function App() {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <Routes>
        <Route path='/' element={<Home2 />} />
        <Route path='/login2' element={<Login2 />} />
        <Route path='/resto/:id' element={<Resto />} />
        <Route path='/mycart' element={<CartList />} />
      </Routes>
    </div>
  );
}

export default App;
