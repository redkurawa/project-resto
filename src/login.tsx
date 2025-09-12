import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LoginPage = () => {
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
            <Input id='email' placeholder='Email' />
            <Input id='password' placeholder='Password' />
            <Button className='w-full'>Login</Button>
          </TabsContent>
          <TabsContent value='signUp'>Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
