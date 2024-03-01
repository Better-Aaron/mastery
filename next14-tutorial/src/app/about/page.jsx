import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: 'About Page',
  description: 'About description',
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better
        </h1>
        <div className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We're worlds's Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <div>Year of experience</div>
          </div>
          <div className={styles.box}>
            <h1>234 K+</h1>
            <div>People reached</div>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <div>Services and plugins</div>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default About;
