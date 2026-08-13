import styles from './join.module.scss';
import { DM_Sans } from 'next/font/google';
import { LOGO_SRC } from "@/app/(pages)/_data/site";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
});

export default function Join() {
  return (
    <div className={`${dmSans.className} ${styles.container}`}>
      <img
        src={LOGO_SRC}
        className={styles.bgImage}
        alt="watermark"
      />
      <div className={styles.content}>
        <h1 className={styles.heading}>We are currently not recruiting new members</h1>
        <p className={styles.subheading}>Keep an eye out for Fall 2026 recruitment!</p>
      </div>
    </div>
  );
}
