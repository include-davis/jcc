import Link from "next/link";
import styles from "./committees-history-cta.module.scss";

export default function CommitteesHistoryCta() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>Learn About JCC&apos;s History</h2>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <Link href="/history" className={styles.btn}>Learn Our Story</Link>
      </div>
    </section>
  );
}
