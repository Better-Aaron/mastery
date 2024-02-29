"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const a = Math.random();
  console.log(a);
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
        {isClient && a}
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
