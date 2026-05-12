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
        <div className={`${styles.aboutDropdown} ${openMenu === "about" ? styles.active : ""}`}>
          <a href="/about" className={styles.aboutBtn}>About</a>
          <img 
            className={styles.dropdownArrow}
            src="/dropdown_arrow.svg" alt="dropdown arrow"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMenu("about");
            }}/>
          <div className={styles.aboutDropdownMenu}>
            <a href="/history">History</a>
            <a href="/partnerships">Partnership</a>
            <a href="/alumni">Alumni</a>
          </div>
        </div>
        <div className={`${styles.committeeDropdown} ${openMenu === "committees" ? styles.active : ""}`}>
          <a href="/committees" className={styles.committeesBtn}>Committees</a>
          <img 
            className={styles.dropdownArrow}
            src="/dropdown_arrow.svg" alt="dropdown arrow"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMenu("committees");
            }}/>
          <div className={styles.committeeDropdownMenu}>
            <a href="/committees/dental">Dental Committee</a>
            <a href="/committees/mental">Mental Health & Wellness Committee</a>
            <a href="/committees/physical">Physical Integrated Health Committee</a>
            <a href="/committees/community">Community Outreach Committee</a>
            <a href="/committees/sexual">Sexual & Reproductive Committee</a>
          </div>
        </div>
        <a href="/contact" className={styles.contactBtn}>Contact Us</a>
        <a href="/join" className = {styles.joinBtn}>Join Us</a>
      </div>
    </div>
  );
}