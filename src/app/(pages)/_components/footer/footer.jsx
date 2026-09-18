"use client";

import { useState } from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { DM_Sans } from 'next/font/google'
import { LOGO_SRC } from "@/app/(pages)/_data/site";
import { navLinks } from "@/app/(pages)/_data/navLinks";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "700"],
})

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    // regex for email verification
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSuccess("");
      console.log("Invalid email: ", email);
      return;
    } 

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      setError("");
      setEmail("");
      setSuccess("Email submitted successfully!");
      console.log("Email submitted: ", email);

    } catch (err) {
      console.error("Error submitting email: ", err);
      setError("An error occurred while submitting your email. Please try again.");
      setSuccess("");
    }
  }

  return (
    <div className={`${styles.container} ${dmSans.className}`}>
      {/* Newsletter subscribe UI removed from display (client request) — the
          form-handling logic above (email/error/success state, validateEmail,
          handleSubmit) and the /api/subscribe route are left intact in case
          this gets re-enabled later. To bring it back, re-add:
          <div className={styles.subscribeContainer}>
            <h4>Subscribe to our Newsletter!</h4>
            <p>Enter your email to get notified about our new solutions</p>
            <div className={styles.inputContainer}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button href="/" className={`${styles.linkReset} ${styles.submitBttn}`} onClick={handleSubmit}>
                  <HiOutlineChevronRight style={{ fontSize: "20px" }} />
                </button>
              </div>
              {error && <p className={styles.error}>{error}</p>}
              {success && <p className={styles.success}>{success}</p>}
            </div>
          </div>
      */}

      <div className={styles.linksContainer}>
        <div className={styles.about}>
          <img src={LOGO_SRC} alt="logo" />
          <div className={styles.aboutText}>
            <h4>Juvenile Caduceus Clinic</h4>
            <p>Our goal is to work together to provide equal care with respect to social, mental, dental, and
              overall health to children in adolescent institutions and programs.</p>
          </div>
        </div>

        <div className={styles.home}>
          <h4>Home</h4>
          <Link href="/#our-mission" className={styles.linkReset}>
            <p>Our Mission</p>
          </Link>
          <Link href="/#our-committees" className={styles.linkReset}>
            <p>Our Committees</p>
          </Link>
          <Link href="/#recruitment" className={styles.linkReset}>
            <p>Recruitment</p>
          </Link>
        </div>

        <div className={styles.committees}>
          <h4>Committees</h4>
          {navLinks.committees.items.map((item) => (
            <Link key={item.href} href={item.href} className={styles.linkReset}>
              <p>{item.label}</p>
            </Link>
          ))}
        </div>

        <div className={styles.history}>
          <h4>History</h4>
          <Link href="/history#our-past" className={styles.linkReset}>
            <p>Our Past</p>
          </Link>
          <Link href="/history#our-future" className={styles.linkReset}>
            <p>Our Future</p>
          </Link>
        </div>

        <div className={styles.contact}>
          <h4>Contact</h4>
          <Link href="/contact#form" className={styles.linkReset}>
            <p>Send a Message</p>
          </Link>
          <Link href="/contact#info" className={styles.linkReset}>
            <p>Contact Info</p>
          </Link>
          <Link href="/contact#map" className={styles.linkReset}>
            <p>Visit Us</p>
          </Link>
        </div>
      </div>

      <div className={styles.copyright}>
        <h4>© Juvenile Caduceus Clinic</h4>
        <div className={styles.socials}>
          <Link href="https://www.instagram.com/jcclinic/"
            className={styles.linkReset}
            onClick={() => console.log("Instagram clicked")}>
            <FaInstagram style={{ fontSize: "30px" }} />
          </Link>
          <a href="mailto:jcc.jcc@gmail.com"
            className={styles.linkReset}
            onClick={() => console.log("Email clicked")}>
            <MdEmail style={{ fontSize: "30px" }} />
          </a>
        </div>
      </div>
    </div>

  );
}