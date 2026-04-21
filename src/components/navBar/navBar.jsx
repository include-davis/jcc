import styles from "./navBar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navShell}>
      <img src="/Dark_Blue_Logo.svg" alt="JCC logo" />
      <div className={styles.navButtons}>
        <button className={styles.homeBtn}>Home</button>
        <button className={styles.aboutBtn}>About</button>
        <button className={styles.committeesBtn}>Committees</button>
        <button className={styles.contactBtn}>Contact Us</button>
        <button className={styles.joinBtn}>Join Us</button>
      </div>
    </div>
  );
}