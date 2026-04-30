import styles from "./footer.module.scss";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "700"],
})

export default function Footer() {
  return (
    <div className={`${styles.container} ${dmSans.className}`}>
      <div className={styles.subscribeContainer}>
        <h4>Subscribe to our Newsletter!</h4>
        <p>Enter your email to get notified about our new solutions</p>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Email" />
          <Link href="/" className={`${styles.linkReset} ${styles.submitBttn}`}>
            <HiOutlineChevronRight style={{ fontSize: "20px" }} />
          </Link>
        </div>
        
      </div>


      <div className={styles.linksContainer}>
        <div className={styles.about}>
          <img src="/jadeus_logo.png" alt="logo" />
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
          <Link href="/e" 
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
          <Link href="/timeline" 
            className={styles.linkReset}
            onClick={() => console.log("History section clicked")}>
            <p>Section</p>
          </Link>
          <Link href="/timeline" 
            className={styles.linkReset}
            onClick={() => console.log("History section clicked")}>
            <p>Section</p>
          </Link>
          <Link href="/timeline" 
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
            <FaInstagram style={{ fontSize: "30px"}} />
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