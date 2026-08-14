import styles from "./committees.module.scss";
import CommitteeCard from "@/app/(pages)/_components/committees-general-cards/committeesGeneralCards";
import { getCommittees } from "@/app/(pages)/_data/committees";
import { LOGO_SRC } from "@/app/(pages)/_data/site";

export default async function Committees() {
  const committees = await getCommittees();

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>JCC Committees</h1>
            <p className={styles.heroDescription}>Our clinic consists of five distinct committees, each specializing in a different area of health. Each team collaborates together to bring support and care for the Davis community through its wellness initiatives.</p>
            <div className={styles.heroButtons}>
              <div className={styles.heroBtn}>Committees</div>
              <div className={styles.heroBtn}>Collaboration</div>
            </div>
          </div>
          <div className={styles.heroLogoFrame}>
            <img src={LOGO_SRC} alt="JCC Logo"/>
          </div>
        </div>
      </div>

      <div className={styles.committees_bottom}>
        <div className={styles.cardsGrid}>
          {committees.map((committee) => (
            <CommitteeCard
              key={committee.key}
              name={committee.name}
              icon={committee.icon}
              link={committee.link}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
