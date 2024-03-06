'use client';
import { addUser } from '@/lib/actions';
import styles from './admin-users-form.module.css';
import { useFormState } from 'react-dom';

const AdminUsersForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add Mew User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminUsersForm;
