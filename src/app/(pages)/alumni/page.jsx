import styles from "./alumni.module.scss";
import { DM_Sans, Khula } from 'next/font/google'
import AlumniNews from '@/app/(pages)/_components/alumni/alumnNews';
import { getAlumni } from "@/app/(pages)/_data/alumni";
import { LOGO_SRC } from "@/app/(pages)/_data/site";

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export default async function Alumni() {
  const alumniData = await getAlumni();

  return (
    <div className={styles.alumniContainer}>

      <div className={styles.topAlumniSection}> {/* Top section of the alumni page */}
        <div className={styles.topAlumniContent}>
          <div className={styles.topAlumniLeft}>
            <h1 className={styles.topAlumniTitle}>See What Alumni Is Up To Now</h1>
            <p className={styles.topAlumniText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
            </p>
            <div className={styles.topAlumniButtons}>
              <a href="mailto:email@example.com" className={styles.button}>
                Alumni
              </a>
              <a href="mailto:email@example.com" className={styles.button}>
                Connecting
              </a>
            </div>
          </div>
          <div className={styles.topAlumniRight}>
            <img src="/alumni.png" className={styles.topAlumniImage} />
          </div>
        </div>
      </div>

      <div className={styles.updateAlumniSection}> {/* Update card section */}

        <div className={styles.learnMoreCard}>
          <h2 className={styles.learnMoreTitle}>Get the Latest Updates!</h2>

          <p className={styles.learnMoreText}>
            Want to learn more about our clinic and how to get involved? Click here to learn more about our recruitment process.
          </p>
          <a href="mailto:email@example.com" className={styles.learn_more_btn}>
            Join Us
          </a>
        </div>

      </div>

      <div className={styles.carouselContainer}>
        <img src={LOGO_SRC} alt="JCC Logo" className={styles.jccLogo} />
        <div className={styles.alumniNewsWrapper}>
          <h1 className={`${dmSans.className} ${styles.alumniHeader}`}>ALUMNI NEWS</h1>
          <h2 className={`${dmSans.className} ${styles.alumniSubHeader}`}>What JCC meant to them?</h2>

          <div className={styles.carouselSection}>
            <div className={styles.carouselWrapper}>
              {[...alumniData, ...alumniData].map((alumni, index) => {
                return (
                  <AlumniNews
                    key={index}
                    name={alumni.name}
                    workplace={alumni.workplace}
                    testimony={alumni.testimony}
                    image={alumni.image}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomAlumniSection}> {/* Bottom section of the alumni page */}
        <div className={styles.shareCard}>
          <h2 className={styles.shareTitle}>Share Your JCC Experience</h2>
          <p className={styles.shareText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <a href="mailto:email@example.com" className={styles.learn_more_btn}>
            Share Your Story
          </a>
        </div>
      </div>

    </div>
  );
}
