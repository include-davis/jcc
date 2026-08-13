import styles from "./alumniNews.module.scss";
import { DM_Sans, Khula } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "700"],
})

const khula = Khula({
  subsets: ['latin'],
  weight: ["300", "400", "600", "700", "800"],
})

export default function AlumniNews({ name, workplace, testimony, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title} style={dmSans.style}>
          <img src={image} alt={name} />
          <div className={styles.titleWords}>
            <h2 style={dmSans.style}>{name}</h2>
            <p style={khula.style}>{workplace}</p>
          </div>
        </div>
        <p style={khula.style}>{testimony}</p>
      </div>
    </div>
  )
}