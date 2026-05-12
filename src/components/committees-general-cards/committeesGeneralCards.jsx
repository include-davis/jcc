import styles from "./committeesGeneralCards.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import { committeesData } from "./data/committeesData";

export default function CommitteesGeneralCards() {

  return (
    <main className={styles.container}>
        <div className={styles.committeesCards}>
            {committeesData.map((committee) => (
                <div key={committee.id} className={styles.card}>
                    <div className={styles.cardTop}>
                        <img src={committee.icon} alt={committee.name} />
                    </div>
                    <div className={styles.cardBottom}>
                        <h3>{committee.name}</h3>
                        <a href={committee.link} className={styles.learnMoreBtn}>
                            Learn More
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </main>
  );
}