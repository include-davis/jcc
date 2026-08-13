import styles from "./history.module.scss";
import HistoryBody from "./HistoryBody";
import { getHistoryYears } from "@/app/(pages)/_data/history";

export default async function History() {
  const years = await getHistoryYears();

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

      <HistoryBody years={years} />

    </div>
  );
}
