import LoginForm from '@/components/login-form/login-form';
import { auth } from '@/lib/auth';
import styles from './login.module.css';
import { handleGithubLogin } from '@/lib/actions';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
