import React, { useState } from 'react';
import styles from "./contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    committee: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus('sending');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) setStatus('sent');
    else setStatus('error');
  };

  return (
    <main className={styles.contactPage}>
      <section className={styles.contactContainer}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>Contact Us</h1>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>

          <form className={styles.form}>
            <input type="text" name="name" placeholder="Name"
              value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email"
              value={formData.email} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone Number"
              value={formData.phone} onChange={handleChange} />

            <select name="committee" value={formData.committee} onChange={handleChange}>
              <option value="">Committee</option>
              <option value="General">General</option>
              <option value="Events">Events</option>
              <option value="Partnerships">Partnerships</option>
            </select>

            <textarea name="message" placeholder="Your Message"
              value={formData.message} onChange={handleChange} />

            <button type="button" onClick={handleSubmit}>
              {status === 'sending' ? 'Sending...' : 'Send'}
            </button>

            {status === 'sent' && <p style={{ color: 'green' }}>Message sent!</p>}
            {status === 'error' && <p style={{ color: 'red' }}>Something went wrong.</p>}
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

          <div className={styles.mapBox}>
            <div className={styles.mapContainer}>
              <iframe
                className={styles.mapFrame}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6176.567440825006!2d-121.75263835211008!3d38.54389305473589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80852909a76deced%3A0xbdeb9ff130b7a9d0!2sMemorial%20Union%20%26%20Main%20Island!5e0!3m2!1sen!2sus!4v1778546594433!5m2!1sen!2sus" 
                style={{ border:0 }} allowFullScreen loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Location map"
              ></iframe>
            </div>
          </div>

          <div className={styles.icons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/insta.png" alt="Instagram" className={styles.iconImage} />
            </a>
            <a href="https://indeed.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/indeed.png" alt="Indeed" className={styles.iconImage} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}