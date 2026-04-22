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
        <div className={styles.MiddleContent}>
          <div className={styles.LeftContent}>
            <h2 className={styles.MissionTitle}> Our Mission</h2>
            <p className={styles.MissionText}> 
              <span className={styles.BoldIntro}>In Juvenile Caduceus Clinic,</span> we aims to deliver high-quality care and assistance 
              to the underprivileged youth and older adolescents who are struggling and seek help. Addressing the public health issues 
              regarding a child’s well-being including but not limited to childhood obesity, physical activity, cognitive health, and 
              stress is fundamental in building an environment for all children to thrive in. By integrating the four pillars of leadership, 
              humility, empathy, and responsibility, our goal is to work together to provide equal care with respect to social, mental, 
              dental, and overall health to children in adolescent institutions and programs.
            </p> 
          </div>
          <div className={styles.RightContent}>
            <div className={styles.MissionImgCircle}>
              <img className={styles.MissionImg} src="/jcc_logo.png" alt="JCC Logo"/>
            </div>
          </div>
        </div>

        
      </div>

      {/* TODO: bottom-page section - Refer to Figma file for
         + design specs. Write your code here. */}
      <div className={styles.sectionBottom}>
        bottom-page
      </div>
    </div>
  );
}
