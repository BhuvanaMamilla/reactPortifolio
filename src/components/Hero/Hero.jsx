import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi there, I'm Mounika Rangisetty</h1>
        <p className={styles.description}>
        I am into Full Stack Web Development | UI/UX Design | Machine Learning | Cyber Security
        </p>
        <a href="https://drive.google.com/file/d/1zs8TFGdgqzghXgno2FWaNO0PwEfQOQgE/view?usp=sharing" className={styles.contactBtn}>
          RESUME
        </a>
      </div>
      <img
        src={getImageUrl("hero/mounika.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
