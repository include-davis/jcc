import React from 'react';
import styles from "./alumni.module.scss";
import AlumniNews from '@/components/alumni/alumnNews';
import alumniData from "./data";
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "700"],
})

export default function Alumni() {
  return (
    <div className={styles.container}>
      <img src="Dark_Blue_Logo.png" alt="JCC Logo" className={styles.jccLogo} />
      <div className={styles.alumniNewsWrapper}>
        <h1 className={`${dmSans.className} ${styles.alumniHeader}`}>ALUMNI NEWS</h1>
        <h2 className={`${dmSans.className} ${styles.alumniSubHeader}`}>What JCC meant to them?</h2>
        <div className={styles.carouselSection}>
          <div className={styles.carouselWrapper}>
            {[...alumniData, ...alumniData].map((alumni, index) => {
              return (
                <AlumniNews
                  key={alumni.id}
                  name={alumni.name}
                  workplace={alumni.workplace}
                  testimony={alumni.testimony}
                  image={alumni.image}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
