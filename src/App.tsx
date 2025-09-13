// import { Route, Routes } from 'react-router';
import LoginPage from '@/components/pages/login';
import { Route, Routes } from 'react-router';
import { Home } from './components/pages/home';
import Resto from './components/pages/resto';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/resto/:id' element={<Resto />} />
      </Routes>
    </>
  );
}

export default App;
