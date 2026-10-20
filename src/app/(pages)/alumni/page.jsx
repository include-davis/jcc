import styles from "./alumni.module.scss";
import { DM_Sans, Khula } from 'next/font/google'
import AlumniNews from '@/app/(pages)/_components/alumni/alumnNews';
import Hero from "@/app/(pages)/_components/hero/Hero";
import { getAlumni, getAlumniHeroImages } from "@/app/(pages)/_data/alumni";
import { LOGO_SRC, getSiteSettings } from "@/app/(pages)/_data/site";

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export default async function Alumni() {
  const [alumniData, heroImages, { alumniFormLink, joinFormLink }] = await Promise.all([
    getAlumni(),
    getAlumniHeroImages(),
    getSiteSettings(),
  ]);

  return (
    <div className={styles.alumniContainer}>

      <Hero
        title="See What Alumni Is Up To Now"
        description="JCC has 100+ alumni who have gone on to pursue careers in medicine, public health, and other fields. Many of their journeys are inspired by their time at JCC. Read their stories and see how they are making a difference in the world."
        tags={["Alumni", "Connecting"]}
        images={heroImages}
        imageAlt="JCC Alumni"
      />
      <div className={styles.updateAlumniSection}> {/* Update card section */}

        <div className={styles.learnMoreCard}>
          <h2 className={styles.learnMoreTitle}>Get the Latest Updates!</h2>

          <p className={styles.learnMoreText}>
            Want to learn more about our clinic and how to get involved? Click here to learn more about our recruitment process.
          </p>
          <a href={joinFormLink} target="_blank" rel="noopener noreferrer" className={styles.learn_more_btn}>
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
            We’d love to hear about your experience with JCC and how it has shaped your journey! Fill out our alumni form to share your story and be featured on our website.
          </p>
          <a href={alumniFormLink} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
            Share Your Story
          </a>
        </div>
      </div>

    </div>
  );
}
