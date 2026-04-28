import React from 'react';
import styles from "./home.module.scss";

export default function Home() {

  const committees = [
    {
      title: (
        <>
          Mental Health & <br />
          Wellness Committee
        </>
      ),
      image: "/Mental_Health_and_Wellness_Logo.png",
    },
    {
      title: (
        <>
          Community Outreach <br />
          Committee
        </>
      ),
      image: "/Community_Outreach_Logo.png",
    },
    {
      title: (
        <>
          Physical & <br />
          Integrated Committee
        </>
      ),
      image: "/Physical_and_Integrated_Health_Logo.png",
    },
    {
      title: (
        <>
          Sexual & <br />
          Reproductive Committee
        </>
      ),
      image: "/SNR_Logo.png",
    },
    {
      title: (
        <>
          Dental Health <br />
          Committee
        </>
      ),
      image: "/Dental_Health_Logo.png",
    },
  ];

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

        <div className={styles.OurMissionContainer}>
          <div className={styles.OurMissionLeftContent}>
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
          <div className={styles.OurMissionRightContent}>
            <div className={styles.MissionImgCircle}>
              <img className={styles.MissionImg} src="/jcc_logo.png" alt="JCC Logo"/>
            </div>
          </div>
        </div>
        
        <div className={styles.OurCommitteesContainer}> 
          <div className={styles.OurCommitteesTopContent}> {/* Title and Description*/}
            <h2 className={styles.OurCommitteesTitle}> Our Committees </h2>
            <p className={styles.OurCommitteesDescription}>
              Our Clinic consists of 5 different committees all focused on a different area of health care. Learn more about each committee by clicking the links below
            </p>
          </div>
          <div className={styles.OurCommitteesBottomContent}> {/* Committee Logos and Buttons */}
            {committees.map((committee) => (
              <div className={styles.CommitteeItem} key={committee.title}>
                <div className={styles.CommitteeIconContainer}>
                  <img
                    className={styles.CommitteeIcon}
                    src={committee.image}
                    alt={committee.title}
                  />
                </div>

                <button className={styles.CommitteeButton}>
                  <span className={styles.CommitteeButtonText}>
                    {committee.title}
                  </span>
                  <span className={styles.CommitteeButtonArrow}>
                    <img 
                      className={styles.CommitteeArrowIcon}
                      src="/Our_Committees_Arrow.svg"
                      alt="arrow"
                    />
                  </span>
                </button>
              </div>
            ))}
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
