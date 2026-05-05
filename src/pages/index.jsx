import React from 'react';
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* TODO: top-page section - Refer to Figma file for
         +design specs. Write your code here. */}
      <div className={styles.sectionTop}>       
        top-page
      </div>

      {/* TODO: middle-page section - Refer to Figma file for
         + design specs. Write your code here. */}
      <div className={styles.sectionMiddle}>
        middle-page
      </div>

      <div className={styles.sectionBottom}>
        <div className={styles.learnMoreCard}>
          <h2 className={styles.learnMoreTitle}>Recruitment</h2>

          <p className={styles.learnMoreText}>
            Want to learn more about our clinic and how to get involved? Click here to learn more about our recruitment process.
          </p>
          <a href="/contact" className={styles.secondaryButton}>
            Join Us 
          </a>
        </div>
      </div>
    </div>
  );
}
