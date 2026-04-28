import React from 'react';
import styles from "./contact.module.scss";
export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contactContainer}>
        <div className={styles.leftColumn}>
          <h1>Contact Us</h1>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Send us a
            message and we will get back to you as soon as possible.
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
            <h3>Email</h3>
            <p>example@ucdavis.edu</p>
          </div>

          <div className={styles.infoBox}>
            <h3>Phone</h3>
            <p>999-999-9999</p>
          </div>

          <div className={styles.infoBox}>
            <h3>Location</h3>
            <p>1 Shields Ave, Davis, CA 95616</p>
          </div>

          <div className={styles.mapBox}>
            Map Placeholder
          </div>

          <div className={styles.icons}>
            <span>in</span>
            <span>ig</span>
          </div>
        </div>
      </section>
    </main>
  );
}