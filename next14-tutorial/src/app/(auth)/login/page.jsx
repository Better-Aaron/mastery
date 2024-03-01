import { login } from '@/lib/actions';
import { auth, signIn } from '@/lib/auth';
import React from 'react';

const Login = async () => {
  const session = await auth();

  const handleGithubLogin = async () => {
    'use server';
    await signIn('github');
  };
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>

      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login with Credentials</button>
      </form>
    </div>
  );
};

export default Login;
