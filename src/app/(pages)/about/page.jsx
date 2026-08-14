import Link from "next/link";
import styles from "./about.module.scss";
import MemberCard from "@/app/(pages)/_components/members/MemberCard";
import { getBoardMembers } from "@/app/(pages)/_data/boardMembers";

const sections = [
  {
    title: "Our History",
    description: "From our founding to where we are today — see the milestones and people who shaped JCC.",
    href: "/history",
  },
  {
    title: "Our Partnerships",
    description: "Meet the healthcare providers, organizations, and professionals we collaborate with to expand care.",
    href: "/partnerships",
  },
  {
    title: "Our Alumni",
    description: "See where JCC members go after graduation, and how the clinic stays with them.",
    href: "/alumni",
  },
];

export default async function About() {
  const boardMembers = await getBoardMembers();

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.title}>About JCC</h1>
        <p className={styles.subtitle}>
          Juvenile Caduceus Clinic is more than one story — it&apos;s the history of the students
          who built it, the partners who help it grow, and the alumni who carry it forward.
          Explore each to see the full picture.
        </p>
      </div>

      <div className={styles.cards}>
        {sections.map((section) => (
          <Link key={section.href} href={section.href} className={styles.card}>
            <h2 className={styles.cardTitle}>{section.title}</h2>
            <p className={styles.cardDescription}>{section.description}</p>
            <span className={styles.cardLink}>Learn More</span>
          </Link>
        ))}
      </div>

      <section className={styles.boardSection}>
        <h2 className={styles.boardTitle}>Our Board</h2>
        <div className={styles.boardGrid}>
          {boardMembers.map((member) => (
            <MemberCard key={member.email || member.name} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}
