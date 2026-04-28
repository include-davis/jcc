import React from 'react';
import styles from "./partnerships.module.scss";
import { FaEye, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function Partnerships() {
  {/* Made an array to eventually implement the cards from the design */}
  const offers = [
    {
      icon: <FaEye size={32} color="black"/>,
      title: "Event Visibility",
      desc: "Co-brand and showcase your organization at our community outreach events and initiatives.",
    },
    {
      icon: <FaUsers size={32} color="black"/>,
      title: "Community Engagement",
      desc: "Connect and network with a passionate group of future healthcare professionals.",
    },
    {
      icon: <FaCheckCircle size={32} color="black"/>,
      title: "Direct Impact",
      desc: "Make a meaningful difference in the health and well-being of underserved youth in our community.",
    },
  ];
  return (
    <div className={styles.container}>
      Partnerships
      {/* Watermark circle */}
      <img src="Dark_Blue_Logo.png" 
      className={styles.bgImage}
      alt="watermark"/>
      {/* Header and sub-header for the page */}
      <h1 className={styles.heading}>What we offer</h1> 
      <p className={styles.subheading}>Partners gain meaningful visibility within a mission-driven community while making a
         direct impact on the health and well-being of underserved youth.</p>
      <div className = {styles.cards}>
        {/* used map() to make the cards */}
      {offers.map((item) => (
          <div key={item.title} className={styles.card}>
            <span className={styles.icon}>{item.icon}</span>
            <h3 className={styles.card_title}>{item.title}</h3>
            <p className={styles.card_desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
