import styles from "./partnerships.module.scss";
import PartnershipsCarouselCards from "@/app/(pages)/_components/partnerships/partnerships-carousel-cards";
import PartnersCarousel from "@/app/(pages)/_components/partnerships/partners-carousel";
import Hero from "@/app/(pages)/_components/hero/Hero";
import { LOGO_SRC, getSiteSettings } from "@/app/(pages)/_data/site";
import { getPartnerships, getPartnershipsHeroImages } from "@/app/(pages)/_data/partnerships";

export default async function PartnershipsPage() {
  const [partnerships, heroImages, { partnershipFormLink }] = await Promise.all([
    getPartnerships(),
    getPartnershipsHeroImages(),
    getSiteSettings(),
  ]);
  const repeatedPartners = [...partnerships, ...partnerships, ...partnerships];

  return (
    <div className={styles.container}>
      <Hero
        title="Become a Partner"
        description="JCC collaborates with healthcare providers, community organizations, and industry professionals to expand access to care for underserved youth. Our partners help us address critical public health issues — from childhood obesity to mental health — ensuring every child has the opportunity to thrive."
        buttons={[{ label: "Apply Now", href: partnershipFormLink }]}
        images={heroImages}
        imageAlt="JCC Partnerships"
      />

      {/* Our Partners */}
      <div className={styles.container1}>
        {/* Watermark circle */}
        <img src={LOGO_SRC}
          className={styles.bgImage}
          alt="watermark" />
        <div className={styles.inner}>
          <PartnersCarousel partnerships={partnerships} />
        </div>
      </div>

      {/* Version 1: Partnerships carousel */}
      <div className={styles.partnershipsCarousel}>
        <div className={styles.partnershipsCarouselRow}>
          <div className={`${styles.partnershipsCarouselTrack} ${styles.moveLeft}`}>
            {repeatedPartners.map((partnership, carouselIndex) => (
              <PartnershipsCarouselCards
                key={carouselIndex}
                image={partnership.image}
                title={partnership.title}
              />
            ))}
          </div>
        </div>

        <div className={styles.partnershipCarouselRow}>
          <div className={`${styles.partnershipsCarouselTrack} ${styles.moveRight}`}>
            {repeatedPartners.map((partnership, carouselIndex) => (
              <PartnershipsCarouselCards
                key={`bottom-carousel-${partnership.key}-${carouselIndex}`}
                image={partnership.image}
                title={partnership.title}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Interested in Partnering? */}
      <section className={styles.interestedSection}>
        <div className={styles.interestedCard}>
          <h2 className={styles.interestedTitle}>Interested in Partnering?</h2>
          <p className={styles.interestedBody}>
            Ready to make a lasting impact? By partnering with JCC, you&apos;ll join a passionate
            community dedicated to improving the health and well-being of underserved youth.
            Together, we can break down barriers to care and create meaningful change — one child
            at a time.
          </p>
          <a href={partnershipFormLink} className={styles.interestedBtn}>Apply Now</a>
        </div>
      </section>
    </div>
  );
}
