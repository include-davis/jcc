import React from "react";
import styles from "./partner-cards.module.scss";
import { DM_Sans, DM_Mono, Khula } from 'next/font/google'
import { FaExternalLinkAlt } from "react-icons/fa";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ["300", "400", "500"],
})

const khula = Khula({
  subsets: ['latin'],
  weight: ["300", "400"],
})
  
export default function PartnerCards({
  image, 
  title,
  committee,
  description,
  websiteLink,
}) {
  return (  
    <div className={`${styles.container} ${dmSans.className}`}>
      <div className={styles.content}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p className={`${dmMono.className} ${styles.committee}`}>{committee}</p>
        <p className={`${khula.className} ${styles.description}`} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.divider}></div>
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
          Website
          <FaExternalLinkAlt className={`${styles.externalLinkIcon} ${dmSans.className}`} />
        </a>
      </div>
  </div>
  );

}