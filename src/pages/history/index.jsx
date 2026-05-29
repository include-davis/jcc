import React from 'react';
import styles from "./history.module.scss";

const timelineData = [
  { year: '2021', image: '/history_img_1.jpg', side: 'left' },
  { year: '2022', image: '/history_img_2.jpg', side: 'right' },
  { year: '2023', image: '/history_img_3.jpg', side: 'left' },
  { year: '2024', image: '/history_img_4.jpg', side: 'right' },
  { year: '2025', image: '/history_img_5.jpg', side: 'left' },
];

export default function History() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>

      {/* Hero Header */}
      <section className={styles.background}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>History</h1>
          <p className={styles.description}>
            Learn more about how our journey has shaped our clinic. This
            highlights past events, community involvement, and key moments that
            reflect our commitment to healthcare and growth.
          </p>
          <div className={styles.buttons}>
            <button className={styles.btn}>History</button>
            <button className={styles.btn}>Past Events</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="/second.jpg" alt="JCC History" className={styles.image} />
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>Our Past History</h2>

        <div className={styles.timeline}>
          {timelineData.map((entry) => (
            <div
              key={entry.year}
              className={`${styles.timelineRow} ${entry.side === 'left' ? styles.rowLeft : styles.rowRight}`}
            >
              <div className={styles.leftSlot}>
                {entry.side === 'left' && (
                  <div className={styles.entryCard}>
                    <p className={styles.entryYear}>{entry.year}</p>
                    <img
                      src={entry.image}
                      alt={`JCC ${entry.year}`}
                      className={styles.entryImage}
                    />
                    <button className={styles.learnMoreBtn}>Learn More</button>
                  </div>
                )}
              </div>
              <div className={styles.rightSlot}>
                {entry.side === 'right' && (
                  <div className={styles.entryCard}>
                    <p className={styles.entryYear}>{entry.year}</p>
                    <img
                      src={entry.image}
                      alt={`JCC ${entry.year}`}
                      className={styles.entryImage}
                    />
                    <button className={styles.learnMoreBtn}>Learn More</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Our Future */}
        <div className={styles.ourFuture}>
          <div className={styles.ourFutureInner}>
            <h2 className={styles.futureTitle}>Our Future</h2>
            <p className={styles.futureBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className={styles.backToTopWrapper}>
          <button className={styles.backToTopBtn} onClick={scrollToTop}>
            ↑ Back to Top
          </button>
        </div>
      </section>

    </div>
  );
}
