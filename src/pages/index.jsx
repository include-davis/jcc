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

      {/* TODO: bottom-page section - Refer to Figma file for
         + design specs. Write your code here. */}
      <div className={styles.sectionBottom}>
        bottom-page
      </div>
    </div>
  );
}
