import RegisterForm from '@/components/register-form/register-form';
import styles from './register.module.css';
import { register } from '@/lib/actions';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
