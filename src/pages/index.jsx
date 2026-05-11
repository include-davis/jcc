import React from "react";
import Link from "next/link";
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
      route: "/committees_mental",
    },
    {
      title: (
        <>
          Community Outreach <br />
          Committee
        </>
      ),
      image: "/Community_Outreach_Logo.png",
      route: "/committees_community",
    },
    {
      title: (
        <>
          Physical & <br />
          Integrated Committee
        </>
      ),
      image: "/Physical_and_Integrated_Health_Logo.png",
      route: "/committees_physical",
    },
    {
      title: (
        <>
          Sexual & <br />
          Reproductive Committee
        </>
      ),
      image: "/SNR_Logo.png",
      route: "/committees_sexual",
    },
    {
      title: (
        <>
          Dental Health <br />
          Committee
        </>
      ),
      image: "/Dental_Health_Logo.png",
      route: "/committees_dental",
    },
  ];

  return (
    <main className={styles.container}>
      <section className={styles.sectionTop}>
        top-page
      </section>

      <section className={styles.sectionMiddle}>
        <section className={styles.OurMissionContainer}>
          <article className={styles.OurMissionLeftContent}>
            <h2 className={styles.MissionTitle}>Our Mission</h2>

            <p className={styles.MissionText}>
              <span className={styles.BoldIntro}>
                In Juvenile Caduceus Clinic,
              </span>{" "}
              we aim to deliver high-quality care and assistance to the
              underprivileged youth and older adolescents who are struggling and
              seek help. Addressing the public health issues regarding a child’s
              well-being including but not limited to childhood obesity, physical
              activity, cognitive health, and stress is fundamental in building
              an environment for all children to thrive in. By integrating the
              four pillars of leadership, humility, empathy, and responsibility,
              our goal is to work together to provide equal care with respect to
              social, mental, dental, and overall health to children in
              adolescent institutions and programs.
            </p>
          </article>

          <figure className={styles.MissionImgCircle}>
            <img
              className={styles.MissionImg}
              src="/jcc_logo.png"
              alt="JCC Logo"
            />
          </figure>
        </section>

        <section className={styles.OurCommitteesContainer}>
          <header className={styles.OurCommitteesTopContent}>
            <h2 className={styles.OurCommitteesTitle}>Our Committees</h2>

            <p className={styles.OurCommitteesDescription}>
              Our Clinic consists of 5 different committees all focused on a
              different area of health care. Learn more about each committee by
              clicking the links below
            </p>
          </header>

          <section className={styles.OurCommitteesBottomContent}>
            {committees.map((committee) => (
              <article className={styles.CommitteeItem} key={committee.route}>
                <img
                  className={styles.CommitteeIcon}
                  src={committee.image}
                  alt="Committee logo"
                />

                <Link href={committee.route} className={styles.CommitteeButton}>
                  <span className={styles.CommitteeButtonText}>
                    {committee.title}
                  </span>

                  <img
                    className={styles.CommitteeArrowIcon}
                    src="/Our_Committees_Arrow.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </Link>
              </article>
            ))}
          </section>
        </section>
      </section>

      <section className={styles.sectionBottom}>
        bottom-page
      </section>
    </main>
  );
}