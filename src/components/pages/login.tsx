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
      setStatus(`success..: ${JSON.stringify(r)}`);
      console.log(r);
      // const token = r.data.token;
      // console.log({ token });
      // localStorage.setItem('authToken', token);
    } catch (err) {
      setStatus('Login Error');
    }
  };

  return (
    <div className='big-container mx-auto flex w-full flex-wrap'>
      <div className='flex w-full basis-1/2 items-center justify-center'>
        <img
          src='./images/login-burger.png'
          className='basis-1/2 object-contain'
        />
      </div>
      <div className='flex-center w-full basis-1/2'>
        <Tabs
          defaultValue='signIn'
          className='w-[400px] rounded-2xl border p-2'
        >
          <TabsList>
            <TabsTrigger value='signIn'>Account</TabsTrigger>
            <TabsTrigger value='signUp'>Password</TabsTrigger>
          </TabsList>
          <TabsContent value='signIn' className='flex flex-col gap-2'>
            <form onSubmit={handleSubmit}>
              <Input
                id='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                id='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPasswd(e.target.value)}
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
