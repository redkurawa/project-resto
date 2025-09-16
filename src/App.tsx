import LoginPage from '@/components/pages/login';
import { Route, Routes } from 'react-router';
import { Home } from './components/pages/home';
// import Resto from './components/pages/detail';
// import ToggleDivs from './components/pages/tes';
import Resto from './components/pages/detail2';
// import Login2 from './components/pages/login2';
import Login3 from './components/pages/login3';
import Login2 from './components/pages/login2';
import Login4 from './components/pages/login4';
// import TesAja from './components/pages/tes';

function App() {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/login2' element={<Login2 />} />
        <Route path='/login3' element={<Login3 />} />
        <Route path='/login4' element={<Login4 />} />
        {/* <Route path='/tes' element={<ToggleDivs />} /> */}
        <Route path='/resto/:id' element={<Resto />} />
        {/* <Route path='/tes' element={<TesAja />} /> */}
      </Routes>
    </div>
  );
}

export default App;
