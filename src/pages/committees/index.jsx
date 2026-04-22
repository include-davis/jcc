import React from 'react';
import styles from "./committees.module.scss";

export default function Committees() {
  return (
    <div className={styles.container}>
      Committees
      
      <div className={styles.committees_top}>
        <div className={styles.committees_top_content}>
          <div className={styles.committees_top_content_left}>
            <h1>JCC Committees</h1>
            <p>Our clinic consists of five distinct committees, each specializing in a different area of health. Each team collaborates together to bring support and care for the Davis community through its wellness initiatives.</p>
            <div className={styles.buttons}>
              <button className={styles.button}>Committees</button>
              <button className={styles.button}>Collaboration</button>
            </div>
          </div>
          <div className={styles.committees_top_content_right_logo_frame}>
            <img src="/Dark_Blue_Logo.png" alt="JCC Logo"/>
          </div>
        </div> 
      </div>

      <div className={styles.committees_bottom}>
        {/* Here will be committee cards map */}
      </div>


    </div>
  );
}
