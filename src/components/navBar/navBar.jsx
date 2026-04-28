import styles from "./navBar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navShell}>
      <img src="/Dark_Blue_Logo.svg" alt="JCC logo" />
      <div className={styles.navButtons}>
        <button className={styles.homeBtn}>Home</button>
        <div className={styles.aboutDropdown}>
          <button className={styles.aboutBtn}>About</button>
          <img className={styles.dropdownArrow} src="/dropdown_arrow.svg" alt="dropdown arrow"/>
          <div className={styles.aboutDropdownMenu}>
            <a href="/history">History</a>
            <a href="/partnerships">Partnership</a>
            <a href="/alumni">Alumni</a>
          </div>
        </div>
        <div className={styles.committeeDropdown}>
          <button className={styles.committeesBtn}>Committees</button>
          <img className={styles.dropdownArrow} src="/dropdown_arrow.svg" alt="dropdown arrow"/>
          <div className={styles.committeeDropdownMenu}>
            <a href="/committees_dental">Dental Committee</a>
            <a href="/committees_mental">Mental Health & Wellness Committee</a>
            <a href="/committees_physical">Physical Integrated Health Committee</a>
            <a href="/committees_community">Community Outreach Committee</a>
            <a href="/committees_sexual">Sexual & Reproductive Committee</a>
          </div>
        </div>
        <button className={styles.contactBtn}>Contact Us</button>
        <button className={styles.joinBtn}>Join Us</button>
      </div>
    </div>
  );
}