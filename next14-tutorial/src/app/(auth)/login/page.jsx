import { auth, signIn } from '@/lib/auth';
import React from 'react';

const Login = async () => {
  const session = await auth();

  console.log(session);
  const handleGithubLogin = async () => {
    'use server';
    await signIn('github');
  };
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default Login;
