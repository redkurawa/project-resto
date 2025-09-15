import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PostService } from '@/services/service';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPasswd] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('send ...');

    try {
      const payload = { email, password };
      const r = await PostService('auth/login', payload);
      setStatus(`success..: ${JSON.stringify(r.data)}`);
      console.log(r.data);
      // const token = r.data.token;
      // console.log({ token });
      // localStorage.setItem('authToken', token);
    } catch (err) {
      setStatus('Login Error');
    }
  };

  return (
    <div className='big-container mx-auto flex w-full flex-wrap'>
      <div className='flex w-full items-center justify-center border border-red-200 lg:basis-1/2'>
        <img
          src='./images/login-burger.png'
          className='hidden basis-1/2 object-contain lg:block'
        />
      </div>
      <div className='flex-center mx-auto min-h-screen w-full basis-1/2 lg:min-h-0'>
        <Tabs
          defaultValue='signIn'
          className='w-[400px] rounded-2xl border p-2'
        >
          <TabsList>
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
              <Button className='w-full' type='submit'>
                Login
              </Button>
              {status && <p>{status}</p>}
            </form>
          </TabsContent>
          <TabsContent value='signUp'>Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
