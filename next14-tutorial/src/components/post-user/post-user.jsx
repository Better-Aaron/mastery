import React from 'react';
import styles from './post-user.module.css';
import { getUser } from '@/lib/data';
import Image from 'next/image';

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  console.log(user);
  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : '/noavatar.png'}
        className={styles.avatar}
        alt=""
        width={50}
        height={50}
      />

      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
