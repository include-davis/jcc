import React from 'react';
import { useState, useEffect } from "react";
import styles from "./partnerships.module.scss";
import PartnerCards from '@/components/partnerships/partner-cards';
import PartnershipsCarouselCards from "@/components/partnerships/partnerships-carousel-cards";
import { partnershipsData } from './data';
import { DM_Sans } from 'next/font/google'
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { FaEye, FaUsers, FaCheckCircle } from "react-icons/fa";
import OfferCard from "../../components/partnerships-what-we-offer-cards/partnerships-what-we-offer-cards";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
})

// TODO: replace with the real Google Form link for partner applications.
const APPLY_FORM_LINK = "#";

export default function Partnerships() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardsToShow = isMobile ? 1 : 2;

  const repeatedPartners = [
    ...partnershipsData,
    ...partnershipsData,
    ...partnershipsData,
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const handleNext = () => {
    if (index < partnershipsData.length - cardsToShow) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  // Made an array to eventually implement the cards from the design
  const offers = [
    {
      icon: <FaEye size={32} color="black" />,
      title: "Event Visibility",
      desc: "Co-brand and showcase your organization at our community outreach events and initiatives.",
    },
    {
      icon: <FaUsers size={32} color="black" />,
      title: "Community Engagement",
      desc: "Connect and network with a passionate group of future healthcare professionals.",
    },
    {
      icon: <FaCheckCircle size={32} color="black" />,
      title: "Direct Impact",
      desc: "Make a meaningful difference in the health and well-being of underserved youth in our community.",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Header */}
      <section className={styles.hero}>
        <div className={styles.heroTextContent}>
          <h1 className={styles.heroTitle}>Become a Partner</h1>
          <p className={styles.heroDescription}>
            JCC collaborates with healthcare providers, community organizations, and industry
            professionals to expand access to care for underserved youth. Our partners help us
            address critical public health issues — from childhood obesity to mental health —
            ensuring every child has the opportunity to thrive.
          </p>
          <div className={styles.heroButtons}>
            <a href={APPLY_FORM_LINK} className={styles.heroBtn}>Apply Now</a>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/Dark_Blue_Logo.png" alt="JCC Partnerships" className={styles.heroImage} />
        </div>
      </section>

      {/* Version 2: What we offer section */}
      <div className={styles.container1}>
        {/* Watermark circle */}
        <img src="Dark_Blue_Logo.png"
          className={styles.bgImage}
          alt="watermark" />
        {/* Header and sub-header for the page */}
        <div className={styles.inner}>
          <h1 className={styles.heading}>What we offer</h1>
          <p className={styles.subheading}>Partners gain meaningful visibility within a mission-driven community while making a
            direct impact on the health and well-being of underserved youth.</p>
          <div className={styles.offerCards}>
            {offers.map((item) => (
              <OfferCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>

          <div className={styles.partnershipCardsContainer}>
            <div className={styles.top}>
              <h2 className={dmSans.className}>Our Partners</h2>
              <div className={styles.sub}>
                <p className={dmSans.className}>Our current partners.</p>
                <div className={styles.arrows}>
                  <button className={styles.arrow} onClick={handlePrev} disabled={index === 0}><MdArrowBack /></button>
                  <button className={styles.arrow} onClick={handleNext} disabled={index >= partnershipsData.length - cardsToShow}><MdArrowForward /></button>
                </div>
              </div>
            </div>
            <div className={styles.cards}>
              {partnershipsData.slice(index, index + cardsToShow).map(partnership => (
                <PartnerCards
                  key={partnership.key}
                  image={partnership.image}
                  title={partnership.title}
                  description={partnership.description}
                  websiteLink={partnership.websiteLink}
                />
              ))}
            </div>
          </div>
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
          <a href={APPLY_FORM_LINK} className={styles.interestedBtn}>Apply Now</a>
        </div>
      </section>
    </div>
  );
}
