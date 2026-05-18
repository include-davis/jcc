import React from 'react';
import styles from "./alumni.module.scss";

export default function Alumni() {
  return (
    <div className={styles.alumniContainer}>
      <div className={styles.topAlumniSection}>
        {/*
          Top section of alumni page
        */}


      </div>
      <div className={styles.updateAlumniSection}>
        {/*
          Update card section
        */}
        <div className={styles.learnMoreCard}>
          <h2 className={styles.learnMoreTitle}>Recruitment</h2>

          <p className={styles.learnMoreText}>
            Want to learn more about our clinic and how to get involved? Click here to learn more about our recruitment process.
          </p>
          <a href="mailto:email@example.com" className={styles.secondaryButton}>
            Join Us
          </a>
        </div>

      </div>
      <div className={styles.bottomAlumniSection}> 
        {/*
          Share your JCC Experience section 
        */}
        
      </div>
    </div>
  );
}
