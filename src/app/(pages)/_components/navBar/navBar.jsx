"use client";

import { useState, useEffect, useRef, use } from "react";
import styles from "./navBar.module.scss";
import { navLinks } from "@/app/(pages)/_data/navLinks";
import { LOGO_SRC } from "@/app/(pages)/_data/site";

export default function Navbar({ joinFormLink = "#" }) {
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
      <a href={navLinks.home.href} className={styles.logoLink}>
        <img src={LOGO_SRC} alt="JCC logo" />
      </a>
      <div className={styles.navButtons}>
        <a href={navLinks.home.href} className = {styles.homeBtn}>{navLinks.home.label}</a>
        <div className={`${styles.aboutDropdown} ${openMenu === "about" ? styles.active : ""}`}>
          <a href={navLinks.about.href} className={styles.aboutBtn}>{navLinks.about.label}</a>
          <img
            className={styles.dropdownArrow}
            src="/dropdown_arrow.svg" alt="dropdown arrow"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMenu("about");
            }}/>
          <div className={styles.aboutDropdownMenu}>
            {navLinks.about.items.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
        </div>
        <div className={`${styles.committeeDropdown} ${openMenu === "committees" ? styles.active : ""}`}>
          <a href={navLinks.committees.href} className={styles.committeesBtn}>{navLinks.committees.label}</a>
          <img className={styles.dropdownArrow} src="/dropdown_arrow.svg" alt="dropdown arrow" onClick={() => toggleMenu("committees")}/>
          <div className={styles.committeeDropdownMenu}>
            {navLinks.committees.items.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
        </div>
        <a href={navLinks.contact.href} className={styles.contactBtn}>{navLinks.contact.label}</a>
        <a href={joinFormLink} target="_blank" rel="noopener noreferrer" className = {styles.joinBtn}>{navLinks.join.label}</a>
      </div>
    </div>
  );
}