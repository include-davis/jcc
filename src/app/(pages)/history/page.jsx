import styles from "./history.module.scss";
import HistoryBody from "./HistoryBody";
import Hero from "@/app/(pages)/_components/hero/Hero";
import { getHistoryYears, getHistoryHeroImages } from "@/app/(pages)/_data/history";

export default async function History() {
  const [years, heroImages] = await Promise.all([getHistoryYears(), getHistoryHeroImages()]);

  return (
    <div className={styles.container}>

      <Hero
        title="History"
        description="Learn more about how our journey has shaped our clinic. This highlights past events, community involvement, and key moments that reflect our commitment to healthcare and growth."
        tags={["History", "Past Events"]}
        images={heroImages}
        imageAlt="JCC History"
      />

      <HistoryBody years={years} />

    </div>
  );
}
