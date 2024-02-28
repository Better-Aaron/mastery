import Image from 'next/image';
import styles from './single-post.module.css';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/18119535/pexels-photo-18119535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/18119535/pexels-photo-18119535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.avatar}
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Aaron Kim</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>02.29.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad provident
          itaque sit cupiditate quia dolorum sequi atque eius eligendi hic
          ratione inventore, voluptas nihil facere reiciendis tenetur impedit
          culpa ut.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
