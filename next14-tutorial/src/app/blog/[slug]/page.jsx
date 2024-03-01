import Image from 'next/image';
import styles from './single-post.module.css';
import PostUser from '@/components/post-user/post-user';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  // const post = await getPost(slug);
  const post = await getData(slug);
  console.log(post);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post?.img && (
          <Image src={post?.img} fill alt="" className={styles.img} />
        )}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>02.29.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
