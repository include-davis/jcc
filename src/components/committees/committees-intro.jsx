import React from "react";
import styles from "./committees-intro.module.scss";
import { DM_Sans, Khula } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
})

const khula = Khula({
  subsets: ['latin'],
  weight: ["300", "400"],
})

export default function CommitteesIntro({
  image,
  title,
  description,
}) {
  return (
    <div className={`${dmSans.className} ${styles.container}`}>
      <div className={styles.content}>
        <img src={image} alt={title} className={styles.image} />

        <div className={styles.text}>
          <h2 className={`${styles.title}`}>{title}</h2>
          <p className={`${khula.className}`}>{description}</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <div className={styles.button}>
          <div className={styles.icon}>
            <img src="/events.svg" alt="Events" />
          </div>
          <p className={dmSans.className}>Events</p>
        </div>

        <a href="#past-events" className={styles.button}>
          <div className={styles.icon}>
            <img src="/past_events.svg" alt="Events" />
          </div>
          <p className={dmSans.className}>Past Events</p>
        </a>

        <div className={styles.button}>
          <div className={styles.icon}>
            <img src="/initiatives.svg" alt="Initiatives" />
          </div>
          <p className={dmSans.className}>Initiatives</p>
        </div>
      </div>
    </div>
  );
}