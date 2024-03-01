import RegisterForm from '@/components/register-form/register-form';
import styles from './register.module.css';
import { register } from '@/lib/actions';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
        {/* <form action={register}>
          <input type="text" placeholder="username" name="username" />
          <input type="email" placeholder="email@email.com" name="email" />
          <input type="password" placeholder="username" name="password" />
          <input type="password" placeholder="username" name="passwordRepeat" />

          <button>Register</button>
        </form> */}
      </div>
    </div>
  );
};

export default RegisterPage;
