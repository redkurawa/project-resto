// login3.tsx

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginUser } from '@/redux/auth-slice';
import { useNavigate } from 'react-router';

function Login3() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const { user, isLoading, error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginUser(userData));
  };

  useEffect(() => {
    if (user) {
      navigate('/dash');
    }
  }, [user, navigate]);

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {user && (
        <div>
          <h3>Welcome, {user.name}!</h3>
          <p>Email: {user.email}</p>
        </div>
      )}
      {/* {user && navigate('/dash')} */}
    </div>
  );
}

export default Login3;
