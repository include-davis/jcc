import Link from "next/link";
import styles from "./home.module.scss";
import HeroSlideshow from "./HeroSlideshow";
import { LOGO_SRC } from "@/app/(pages)/_data/site";
import { getHeroSlides } from "@/app/(pages)/_data/home";
import { getCommittees } from "@/app/(pages)/_data/committees";

export default async function Home() {
  const [slides, committees] = await Promise.all([getHeroSlides(), getCommittees()]);

  return (
    <main className={styles.container}>
      <HeroSlideshow slides={slides} />

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
              seek help. Addressing the public health issues regarding a child's
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
              src={LOGO_SRC}
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
              <article className={styles.CommitteeItem} key={committee.link}>
                <img
                  className={styles.CommitteeIcon}
                  src={committee.icon}
                  alt="Committee logo"
                />

                <Link href={committee.link} className={styles.CommitteeButton}>
                  <span className={styles.CommitteeButtonText}>
                    {committee.name}
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

      <div className={styles.sectionBottom}>
        <div className={styles.learnMoreCard}>
          <h2 className={styles.learnMoreTitle}>Recruitment</h2>

          <p className={styles.learnMoreText}>
            Want to learn more about our clinic and how to get involved? Click here to learn more about our recruitment process.
          </p>
          <Link href="/contact" className={styles.secondaryButton}>
            Join Us
          </Link>
        </div>
      </div>
    </main>
  );
}
