import React, { useEffect, useRef, useState } from 'react';
import styles from "./history.module.scss";

const timelineData = [
  { year: '2021', image: '/history_img_1.jpg', side: 'left' },
  { year: '2022', image: '/history_img_2.jpg', side: 'right' },
  { year: '2023', image: '/history_img_3.jpg', side: 'left' },
  { year: '2024', image: '/history_img_4.jpg', side: 'right' },
  { year: '2025', image: '/history_img_5.jpg', side: 'left' },
];

const CAROUSEL_VISIBLE_COUNT = 3;

// navBar.module.scss .navShell has no explicit height; it's a sticky
// element sized by its padding (2.3125rem top/bottom) plus the 55px
// logo, so scroll targets need this much extra offset to clear it.
const NAVBAR_OFFSET = 140;

const additionalInfoData = [
  {
    year: '2021',
    images: ['/history_img_1.jpg', '/history_img_2.jpg', '/history_img_3.jpg', '/history_img_4.jpg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    year: '2022',
    images: ['/history_img_2.jpg', '/history_img_3.jpg', '/history_img_4.jpg', '/history_img_5.jpg'],
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  },
  {
    year: '2023',
    images: ['/history_img_3.jpg', '/history_img_4.jpg', '/history_img_5.jpg', '/history_img_1.jpg'],
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
  {
    year: '2024',
    images: ['/history_img_4.jpg', '/history_img_5.jpg', '/history_img_1.jpg', '/history_img_2.jpg'],
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
  },
  {
    year: '2025',
    images: ['/history_img_5.jpg', '/history_img_1.jpg', '/history_img_2.jpg', '/history_img_3.jpg'],
    description: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore, cum soluta nobis est eligendi optio.',
  },
];

export default function History() {
  const [expandedYears, setExpandedYears] = useState({});
  const [carouselIndex, setCarouselIndex] = useState({});
  const [scrollTargetYear, setScrollTargetYear] = useState(null);
  const yearItemRefs = useRef({});

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleYear = (year) => {
    setExpandedYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  const shiftCarousel = (year, direction, totalImages) => {
    const maxIndex = Math.max(totalImages - CAROUSEL_VISIBLE_COUNT, 0);
    setCarouselIndex((prev) => {
      const current = prev[year] || 0;
      const next = Math.min(Math.max(current + direction, 0), maxIndex);
      return { ...prev, [year]: next };
    });
  };

  const handleLearnMore = (year) => {
    setExpandedYears((prev) => ({ ...prev, [year]: true }));
    setScrollTargetYear(year);
  };

  useEffect(() => {
    if (!scrollTargetYear) return;
    const target = yearItemRefs.current[scrollTargetYear];
    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetTop - NAVBAR_OFFSET, behavior: 'smooth' });
    }
    setScrollTargetYear(null);
  }, [scrollTargetYear, expandedYears]);

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
                    <button className={styles.learnMoreBtn} onClick={() => handleLearnMore(entry.year)}>Learn More</button>
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
                    <button className={styles.learnMoreBtn} onClick={() => handleLearnMore(entry.year)}>Learn More</button>
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

        {/* Additional Information */}
        <section className={styles.additionalInfoSection}>
          <h2 className={styles.additionalInfoTitle}>Additional Information</h2>
          <p className={styles.additionalInfoSubtitle}>Read more about what we did each year!</p>

          <div className={styles.yearList}>
            {additionalInfoData.map((entry) => {
              const isOpen = !!expandedYears[entry.year];
              const index = carouselIndex[entry.year] || 0;
              const maxIndex = Math.max(entry.images.length - CAROUSEL_VISIBLE_COUNT, 0);

              return (
                <div
                  key={entry.year}
                  className={styles.yearItem}
                  ref={(el) => { yearItemRefs.current[entry.year] = el; }}
                >
                  <button
                    type="button"
                    className={styles.yearHeader}
                    onClick={() => toggleYear(entry.year)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.yearLabel}>{entry.year}</span>
                    <img
                      src="/dropdown_arrow.svg"
                      alt=""
                      className={`${styles.dropdownIcon} ${isOpen ? styles.dropdownIconOpen : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className={styles.yearContent}>
                      <div className={styles.carousel}>
                        <button
                          type="button"
                          className={styles.carouselArrow}
                          onClick={() => shiftCarousel(entry.year, -1, entry.images.length)}
                          disabled={index === 0}
                          aria-label={`Show earlier photos for ${entry.year}`}
                        >
                          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                            <path d="M10 2L2 10L10 18" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>

                        <div className={styles.carouselTrack}>
                          {entry.images.slice(index, index + CAROUSEL_VISIBLE_COUNT).map((img, i) => (
                            <img
                              key={index + i}
                              src={img}
                              alt={`${entry.year} highlight ${index + i + 1}`}
                              className={styles.carouselImage}
                            />
                          ))}
                        </div>

                        <button
                          type="button"
                          className={styles.carouselArrow}
                          onClick={() => shiftCarousel(entry.year, 1, entry.images.length)}
                          disabled={index >= maxIndex}
                          aria-label={`Show more photos for ${entry.year}`}
                        >
                          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                            <path d="M2 2L10 10L2 18" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>

                      <p className={styles.yearDescription}>{entry.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Back to Top */}
        <div className={styles.backToTopWrapper}>
          <button className={styles.backToTopBtn} onClick={scrollToTop}>
            <img src="/back_to_top_arrow.png" alt="" className={styles.backToTopIcon} />
            Back to Top
          </button>
        </div>
      </section>

    </div>
  );
}
