"use client";

import { useState } from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { DM_Sans } from 'next/font/google'
import { LOGO_SRC } from "@/app/(pages)/_data/site";

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
          <Link href="/"
            className={styles.linkReset}
            onClick={() => console.log("Home section clicked")}>
            <p>Section</p>
          </Link>
          <Link href="/" 
            className={styles.linkReset}
            onClick={() => console.log("Home section clicked")}>
            <p>Section</p>
          </Link>
          <Link href="/"
            className={styles.linkReset}
            onClick={() => console.log("Home section clicked")}>
            <p>Section</p>
          </Link>
        </div>

        <div className={styles.committees}>
          <h4>Committees</h4>
          <Link href="/committees"
            className={styles.linkReset}
            onClick={() => console.log("Committees section clicked")}>
            <p>Section</p>
          </Link>
          <Link href="/committees"
            className={styles.linkReset}
            onClick={() => console.log("Committees section clicked")}>
            <p>Section</p>
          </Link>
          <Link href="/committees"
            className={styles.linkReset}
            onClick={() => console.log("Committees section clicked")}>
            <p>Section</p>
          </Link>
        </div>

        <div className={styles.history}>
          <h4>History</h4>
          <Link href="/history"
            className={styles.linkReset}
            onClick={() => console.log("History section clicked")}>
            <p>Section</p>
          </Link>
          <Link href="/history"
            className={styles.linkReset}
            onClick={() => console.log("History section clicked")}>
            <p>Section</p>
          </Link>
          <Link href="/history"
            className={styles.linkReset}
            onClick={() => console.log("History section clicked")}>
            <p>Section</p>
          </Link>
        </div>

        <div className={styles.contact}>
          <h4>Contact</h4>
          <Link href="/contact"
            className={styles.linkReset}
            onClick={() => console.log("Contact section clicked")}>
            <p>Section</p>
          </Link>
          <Link href="/contact"
            className={styles.linkReset}
            onClick={() => console.log("Contact section clicked")}>
            <p>Section</p>
          </Link>
          <Link href="/contact"
            className={styles.linkReset}
            onClick={() => console.log("Contact section clicked")}>
            <p>Section</p>
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