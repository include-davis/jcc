import { useState, useEffect, useRef, use } from "react";
import styles from "./navBar.module.scss";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.navShell} ref={navRef}>
      <a href="/" className={styles.logoLink}>
        <img src="/Dark_Blue_Logo.svg" alt="JCC logo" />
      </a>
      <div className={styles.navButtons}>
        <a href="/" className = {styles.homeBtn}>Home</a>
        <div className={`${styles.aboutDropdown} ${openMenu === "about" ? styles.active : ""}`} onClick={() => toggleMenu("about")}>
          <button className={styles.aboutBtn}>About</button>
          <img className={styles.dropdownArrow} src="/dropdown_arrow.svg" alt="dropdown arrow"/>
          <div className={styles.aboutDropdownMenu}>
            <a href="/history">History</a>
            <a href="/partnerships">Partnership</a>
            <a href="/alumni">Alumni</a>
          </div>
        </div>
        <div className={`${styles.committeeDropdown} ${openMenu === "committees" ? styles.active : ""}`} onClick={() => toggleMenu("committees")}>
          <button className={styles.committeesBtn}>Committees</button>
          <img className={styles.dropdownArrow} src="/dropdown_arrow.svg" alt="dropdown arrow"/>
          <div className={styles.committeeDropdownMenu}>
            <a href="/committees/dental-health">Dental Committee</a>
            <a href="/committees/mental-health">Mental Health & Wellness Committee</a>
            <a href="/committees/physical-and-integrated-health">Physical Integrated Health Committee</a>
            <a href="/committees/community-outreach">Community Outreach Committee</a>
            <a href="/committees/sexual-and-reproductive-health">Sexual & Reproductive Committee</a>
          </div>
        </div>
        <a href="/contact" className={styles.contactBtn}>Contact Us</a>
        <a href="/join" className = {styles.joinBtn}>Join Us</a>
      </div>
    </div>
  );
}