import styles from "./committees-past-events.module.scss";

export default function PastEvents({ images = [] }) {
  if (!images.length) return null;

  return (
    <section id="past-events" className={styles.section}>
      <h2 className={styles.heading}>Past Events</h2>

      <div className={styles.grid}>
        {images.map((item, i) => (
          <div className={styles.photoBox} key={i}>
            <img src={item.image} alt={item.caption} className={styles.photo} />
            <div className={styles.overlay}>
              <p className={styles.caption}>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
