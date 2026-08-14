import MemberCard from "@/app/(pages)/_components/members/MemberCard";
import styles from "./committees-members.module.scss";

export default function CommitteeMembers({ leads = [], members = [] }) {
  if (leads.length === 0 && members.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Members</h2>

      {leads.length > 0 && (
        <div className={styles.leadsRow}>
          {leads.map((lead) => (
            <MemberCard key={lead.email || lead.name} {...lead} />
          ))}
        </div>
      )}

      {members.length > 0 && (
        <div className={styles.membersGrid}>
          {members.map((member) => (
            <MemberCard key={member.name} {...member} compact />
          ))}
        </div>
      )}
    </section>
  );
}
