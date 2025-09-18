import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { loginUser } from '@/redux/auth-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React from 'react';
import { useNavigate } from 'react-router';
import { Loader2 } from 'lucide-react';

export const Login2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPasswd] = useState('');
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
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className='sm-container mx-auto flex min-h-screen w-full flex-wrap'>
      <div className='200 flex w-full items-center justify-center lg:basis-1/2'>
        <img
          src='./images/login-burger.png'
          className='hidden basis-1/2 object-contain lg:block'
        />
      </div>
      <div className='flex-center mx-auto min-h-screen w-full basis-1/2 lg:min-h-0'>
        <div className=''>
          <div className='mb-5 flex items-center'>
            <img src='/icons/logo.svg' alt='logo' />
            <span className={`ml-2 text-[32px] font-extrabold text-black`}>
              Foody
            </span>
          </div>
          <h1 className='text-[28px] font-extrabold'> Welcome Back</h1>
          <p className='mb-5 text-[16px] font-medium'>
            Good to see you again! Let's eat
          </p>
          <Tabs defaultValue='signIn' className='w-[400px] rounded-2xl p-2'>
            <TabsList className='w-full'>
              <TabsTrigger value='signIn'>Sign In</TabsTrigger>
              <TabsTrigger value='signUp'>Sign Up</TabsTrigger>
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
                <Button
                  className='h-12 w-full rounded-full py-2'
                  type='submit'
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className='flex items-center gap-2'>
                      <Loader2 className='size-8 animate-spin text-red-100' />
                      Loading...
                    </span>
                  ) : (
                    'Login'
                  )}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value='signUp'>
              <form onSubmit={handleSubmit}>
                <Input
                  id='name'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='my-2'
                />
                <Input
                  id='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='my-2'
                />
                <Input
                  id='phone'
                  placeholder='Number Phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='my-2'
                />
                <Input
                  id='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPasswd(e.target.value)}
                  className='my-2'
                />
                <Input
                  id='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPasswd(e.target.value)}
                  className='my-2'
                />
                <Button
                  className='h-12 w-full rounded-full py-2'
                  type='submit'
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className='flex items-center gap-2'>
                      <Loader2 className='size-8 animate-spin text-red-100' />
                      Register ...
                    </span>
                  ) : (
                    'Register'
                  )}
                </Button>
              </form>
            </TabsContent>
            {user && (
              <div>
                <h3>Welcome, {user.name}!</h3>
                <p>Email: {user.email}</p>
                <p className='break-all whitespace-normal'>token: {token}</p>
              </div>
            )}
          </Tabs>
          {error && <p>Error: {error.message}</p>}
        </div>
      </div>
    </div>
  );
};
//   );
// };

export default Login2;
