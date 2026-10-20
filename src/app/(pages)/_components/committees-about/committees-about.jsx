import React from "react";
import styles from "./committees-about.module.scss";
import { DM_Sans, Khula } from 'next/font/google'
import Link from 'next/link'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
})

const khula = Khula({
  subsets: ['latin'],
  weight: ["300", "400"],
})

export default function CommitteesAbout({
  title = 'Learn About JCC\'s History',
  description = 'Our clinic consists of five distinct committees, each specializing in a different area of health. Each team collaborates together to bring support and care for the Davis community through its wellness initiatives.',
  buttonText = 'Learn Our Story',
}) {
  return (
    <div className={`${dmSans.className} ${styles.container}`}>

        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className={styles.title}>{title}</h2>
            <p className={`${khula.className} ${styles.description}`} dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className={styles.button}>
            <Link href={'/history'} className={styles.cta}>{buttonText}</Link>
          </div>
        </div>

    </div>
  )
}