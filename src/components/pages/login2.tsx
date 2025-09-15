import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { loginUser } from '@/redux/auth-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React from 'react';
import { useNavigate } from 'react-router';

export const Login2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPasswd] = useState('');
  // const [status, setStatus] = useState<string | null>(null);
  const navigate = useNavigate();

  const { user, isLoading, error, token } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginUser(userData));
  };

  useEffect(() => {
    console.log('user:', user); // Tambahkan ini
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className='big-container mx-auto flex w-full flex-wrap'>
      <div className='flex w-full items-center justify-center border border-red-200 lg:basis-1/2'>
        <img
          src='./images/login-burger.png'
          className='hidden basis-1/2 object-contain lg:block'
        />
      </div>
      <div className='flex-center mx-auto min-h-screen w-full basis-1/2 border lg:min-h-0'>
        <Tabs
          defaultValue='signIn'
          className='w-[400px] rounded-2xl border p-2'
        >
          <TabsList>
            <TabsTrigger value='signIn'>Sign In2</TabsTrigger>
            <TabsTrigger value='signUp'>Sign Up2</TabsTrigger>
          </TabsList>
          <TabsContent value='signIn'>
            <form onSubmit={handleSubmit}>
              <Input
                id='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='my-2'
              />
              <Input
                id='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPasswd(e.target.value)}
                className='my-2'
              />
              <Button className='w-full' type='submit' disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Login'}
              </Button>
              {/* {status && <p>{status}</p>} */}
              {/* {status === 'Login failed' && (
                <p className='text-red-500'>Email atau password salah</p>
              )} */}
              {/* {status?.startsWith('Login failed') && (
                <p className='text-red-500'>Gagal login: {status}</p>
              )} */}
            </form>
          </TabsContent>
          <TabsContent value='signUp'>Change your password here.</TabsContent>
          {user && (
            <div>
              <h3>Welcome, {user.name}!</h3>
              <p>Email: {user.email}</p>
              <p className='break-all whitespace-normal'>token: {token}</p>
            </div>
          )}
        </Tabs>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};
//   );
// };

export default Login2;
