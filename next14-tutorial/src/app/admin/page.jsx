import AdminPosts from '@/components/admin-posts/admin-posts';
import { auth } from '@/lib/auth';
import React, { Suspense } from 'react';

import styles from './admin.module.css';
import AdminPostsForm from '@/components/admin-posts-form/admin-posts-form';
import AdminUsersForm from '@/components/admin-users-form/admin-users-form';
import AdminUsers from '@/components/admin-users/admin-users';

const Admin = async () => {
  const session = await auth();
  console.log(session.user.id);
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostsForm userId={session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUsersForm />
        </div>
      </div>
    </div>
  );
};

export default Admin;
