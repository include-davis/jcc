import React from 'react';
import { useState, useEffect } from "react";
import styles from "./partnerships.module.scss";

import PartnerCards from '@/components/partnerships/partner-cards';
import { partnershipsData } from './data';
import { DM_Sans } from 'next/font/google'
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { FaEye, FaUsers, FaCheckCircle } from "react-icons/fa";
import OfferCard from "../../components/partnerships-what-we-offer-cards/partnerships-what-we-offer-cards";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
})

export default function Partnerships() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardsToShow = isMobile ? 1 : 2;

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
    <div>
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
            <div className={styles.partnerCards}>
              {partnershipsData.slice(index, index + cardsToShow).map(partnership => (
                <PartnerCards
                  key={partnership.key}
                  image={partnership.image}
                  title={partnership.title}
                  committee={partnership.committee}
                  description={partnership.description}
                  websiteLink={partnership.websiteLink}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
