import React from 'react';
import styles from "./home.module.scss";

export default function Home() {
  const handleJoinClick = (label) => {
    console.log(`${label} clicked`);
  };

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

          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => handleJoinClick('Join button')}
          >
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}
