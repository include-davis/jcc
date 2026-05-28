import React from "react";
import Link from "next/link";
import styles from "./committeesGeneralCards.module.scss";

export default function CommitteeCard({ name, icon, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img src={icon} alt={`${name} logo`} />
      </div>
      
      <div className={styles.cardBottom}>
        <h3>{name}</h3>
        
        <Link href={link} passHref legacyBehavior>
          <a className={styles.learnMoreBtn}>
            <span className={styles.learnMore}>Learn More</span>
            <img src="arrow_pointing_sideways.svg" alt="Arrow Pointing Right" className={styles.arrowIcon} />
          </a>
        </Link>
      </div>
    </div>
  );
}