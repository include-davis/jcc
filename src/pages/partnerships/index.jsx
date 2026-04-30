import React from 'react';
import { useState, useEffect } from "react";
import styles from "./partnerships.module.scss";
import PartnerCards from '@/components/partnerships/partner-cards';
import { partnershipsData } from './data';
import { DM_Sans } from 'next/font/google'
import { MdArrowForward, MdArrowBack } from "react-icons/md";

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
    if  (index > 0) {
      setIndex(index - 1);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
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
              committee={partnership.committee}
              description={partnership.description}
              websiteLink={partnership.websiteLink}
            />
          ))}
        </div>
      </div>
    </div>

  );
}
