import styles from "./MemberCard.module.scss";

// role/email are only shown when provided — the same card serves both
// "lead"/board members (photo + name + role + email) and plain committee
// members (photo + name only).
export default function MemberCard({ name, photo, role, email, compact = false }) {
  return (
    <div className={`${styles.card} ${compact ? styles.compact : ""}`}>
      <img src={photo} alt={name} className={styles.photo} />
      <p className={styles.name}>{name}</p>
      {role && <p className={styles.role}>{role}</p>}
      {email && <p className={styles.email}>{email}</p>}
    </div>
  );
}
