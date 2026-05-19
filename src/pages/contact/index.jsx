import React from 'react';
import styles from "./contact.module.scss";
export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contactContainer}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>Contact Us</h1>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <form className={styles.form}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number" />

            <select>
              <option>Committee</option>
              <option>General</option>
              <option>Events</option>
              <option>Partnerships</option>
            </select>

            <textarea placeholder="Your Message"></textarea>

            <button type="button">Send</button>
          </form>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.infoBox}>
            <h3 className={styles.infoTitle}>Email</h3>
            <p className={styles.infoText}>ilovejcc@ucdavis.edu</p>
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.infoTitle}>Phone</h3>
            <p className={styles.infoText}>999-999-9999</p>
          </div>

          <div className={styles.infoBox}>
            <h3 className={styles.infoTitle}>Location</h3>
            <p className={styles.infoText}>1 Shields Ave, Davis, <br /> CA 95616</p>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              className={styles.mapFrame}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6176.567440825006!2d-121.75263835211008!3d38.54389305473589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80852909a76deced%3A0xbdeb9ff130b7a9d0!2sMemorial%20Union%20%26%20Main%20Island!5e0!3m2!1sen!2sus!4v1778546594433!5m2!1sen!2sus" 
              style={{ border:0 }} allowfullscreen loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location map"
            ></iframe>
          </div>


          <div className={styles.icons}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img
              src="/icons/insta.png"
              alt="Instagram"
              className={styles.iconImage}
            />
            </a>

            <a
              href="https://indeed.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img
              src="/icons/indeed.png"
              alt="Indeed"
              className={styles.iconImage}
              />
            </a>
            </div>
        </div>
      </section>
    </main>
  );
}