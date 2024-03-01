import Image from 'next/image';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact Page',
  description: 'Contact description',
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact Image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email address"></input>
          <input type="text" placeholder="Phone Number (optional)"></input>
          <textarea type="text" placeholder="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
