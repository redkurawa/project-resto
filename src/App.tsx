import LoginPage from '@/components/pages/loginxxx';
import { Route, Routes } from 'react-router';
import { Home } from './components/pages/home';
import Resto from './components/pages/detail2';
import Login3 from './components/pages/login3xxx';
import Login2 from './components/pages/login2';
import Login4 from './components/pages/login4xxx';
import CartList from './components/pages/cart';
// import { TesLagi } from './components/pages/tes';
// import QuantitySelector from './components/menu-add-cart';

function App() {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/login2' element={<Login2 />} />
        <Route path='/login3' element={<Login3 />} />
        <Route path='/login4' element={<Login4 />} />
        {/* <Route path='/tes3' element={<QuantitySelector />} /> */}
        <Route path='/resto/:id' element={<Resto />} />
        <Route path='/mycart' element={<CartList />} />
      </Routes>
    </div>
  );
}

export default App;
