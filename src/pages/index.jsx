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

        <button
          type="button"
          className={styles.primaryButton}
          onClick={() => handleJoinClick('Join Us button')}
        >
          Join Us
        </button>

        <div className={styles.learnMoreCard}>
          
          <p className={styles.learnMoreText}>
            Want to learn more about our clinic and how to get involved click here to learn more about our recruitment process.
          </p>

          <button
            type="button"
            className={styles.secondaryButton}
            onClick={() => handleJoinClick('Join button')}
          >
            Join
          </button>
        </div>

      </div>
    </div>
  );
}
