import React from 'react';
import styles from "./contact.module.scss";
export default function Contact() {
  return (
    <div className={styles.div}>
      Contact
    
      <div className={styles.mapContainer}>
        <iframe
          className={styles.mapFrame}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6176.567440825006!2d-121.75263835211008!3d38.54389305473589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80852909a76deced%3A0xbdeb9ff130b7a9d0!2sMemorial%20Union%20%26%20Main%20Island!5e0!3m2!1sen!2sus!4v1778546594433!5m2!1sen!2sus" 
          style={{ border:0 }} allowfullscreen loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Location map"
        ></iframe>
      </div>
    </div>
  );
}

Contact;
