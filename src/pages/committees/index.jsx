import { committeesData } from "./data";
import Link from "next/link";
import styles from "./committees.module.scss";
import { useState, useEffect } from "react";
import { FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

export default function Committees() {
  return (
    <div className={styles.container}>
      Committees
      
      <div className={styles.committees_top}>
        <div className={styles.committees_top_content}>
          <div className={styles.committees_top_content_left}>
            <h1>JCC Committees</h1>
            <p>Our clinic consists of five distinct committees, each specializing in a different area of health. Each team collaborates together to bring support and care for the Davis community through its wellness initiatives.</p>
            <div className={styles.buttons}>
              <div className={styles.button}>Committees</div>
              <div className={styles.button}>Collaboration</div>
            </div>
          </div>
          <div className={styles.committees_top_content_right_logo_frame}>
            <img src="/Dark_Blue_Logo.png" alt="JCC Logo"/>
          </div>
        </div> 
      </div>

      <div className={styles.committees_bottom}>
        {/* Here will be committee cards map */}
      </div>

    </div>
  );
}