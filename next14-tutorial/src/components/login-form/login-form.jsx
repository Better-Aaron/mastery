'use client';
import { login } from '@/lib/actions';
import { useFormState } from 'react-dom';
import styles from './login-form.module.css';
import Link from 'next/link';

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <>
      <form className={styles.form} action={formAction}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login </button>
        {state?.error}
        <Link href="/register">
          {"Dont't have an account?"} <b>Register</b>
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
