import styles from "./navBar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navShell}>
      <img src="/Dark_Blue_Logo.svg" alt="JCC logo" />
      <div className={styles.navButtons}>
        <button className={styles.homeBtn}>Home</button>
        <button className={styles.aboutBtn}>About</button>
        <div className={styles.committeeDropdown}>
          <button className={styles.committeesBtn}>Committees</button>
          <img className={styles.dropdownArrow} src="/dropdown_arrow.svg" alt="dropdown arrow"/>
          <div className={styles.dropdownMenu}>
            <a href="#">Dental Committee</a>
            <a href="#">Mental Health & Wellness Committee</a>
            <a href="#">Physical Integrated Health Committee</a>
            <a href="#">Community Outreach Committee</a>
            <a href="#">Sexual & Reproductive Committee</a>
          </div>
        </div>
        <button className={styles.contactBtn}>Contact Us</button>
        <button className={styles.joinBtn}>Join Us</button>
      </div>
    </div>
  );
}