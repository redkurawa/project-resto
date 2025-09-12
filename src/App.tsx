// import { Route, Routes } from 'react-router';
import LoginPage from '@/login';
import { Route, Routes } from 'react-router';
import { Home } from './home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
