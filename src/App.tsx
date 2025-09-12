// import { Route, Routes } from 'react-router';
import LoginPage from '@/login';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
