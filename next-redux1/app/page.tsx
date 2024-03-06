import Image from 'next/image';
import styles from './page.module.css';
import Posts from '@/components/posts/Posts';

export default function Home() {
  return (
    <main className={styles.main}>
      <Posts />
    </main>
  );
}
