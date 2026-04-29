import React from 'react';
import styles from "./partnerships-what-we-offer-cards.module.scss"; 

export default function OfferCard({ icon, title, desc }) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <h3 className={styles.card_title}>{title}</h3>
      <p className={styles.card_desc}>{desc}</p>
    </div>
  );
}