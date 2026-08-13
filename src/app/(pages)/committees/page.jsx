import styles from "./committees.module.scss";
import CommitteeCard from "@/app/(pages)/_components/committees-general-cards/committeesGeneralCards";
import { getCommittees } from "@/app/(pages)/_data/committees";
import { LOGO_SRC } from "@/app/(pages)/_data/site";

export default async function Committees() {
  const committees = await getCommittees();

  return (
    <div className={styles.container}>
      <div className={styles.committees_top}>
        <div className={styles.committees_top_content}>
          <div className={styles.committees_top_content_left}>
            <h1>JCC Committees</h1>
            <p>Our clinic consists of five distinct committees, each specializing in a different area of health. Each team collaborates together to bring support and care for the Davis community through its wellness initiatives.</p>
            <div className={styles.buttons}>
              <div className={styles.button}>Committees</div>
              <div className={styles.button}>Collaboration</div>
            </div>
          </div>
          <div className={styles.committees_top_content_right_logo_frame}>
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
