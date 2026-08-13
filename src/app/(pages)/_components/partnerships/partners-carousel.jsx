"use client";

import { useState, useEffect } from "react";
import { DM_Sans } from "next/font/google";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import PartnerCards from "./partner-cards";
import styles from "@/app/(pages)/partnerships/partnerships.module.scss";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function PartnersCarousel({ partnerships }) {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardsToShow = isMobile ? 1 : 2;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (index < partnerships.length - cardsToShow) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className={styles.partnershipCardsContainer}>
      <div className={styles.top}>
        <h2 className={dmSans.className}>Our Partners</h2>
        <div className={styles.sub}>
          <p className={dmSans.className}>Our current partners.</p>
          <div className={styles.arrows}>
            <button className={styles.arrow} onClick={handlePrev} disabled={index === 0}><MdArrowBack /></button>
            <button className={styles.arrow} onClick={handleNext} disabled={index >= partnerships.length - cardsToShow}><MdArrowForward /></button>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        {partnerships.slice(index, index + cardsToShow).map((partnership) => (
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
  );
}
