"use client";

import { useState } from 'react';
import styles from "./contact.module.scss";

export default function ContactForm({ committees }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    committee: '',
    message: ''
  });
  const [successStatus, setSuccessStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessStatus('Sending your message...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          committee: '',
          message: ''
        });
      } else {
        setSuccessStatus('Failed to send message.');
      }
    } catch (error) {
      setSuccessStatus('An error occurred while sending your message.');
      console.error('Error submitting form:', error);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <select
        name="committee"
        value={formData.committee}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select a Committee
        </option>
        {committees.map((committee) => (
          <option key={committee.key} value={committee.name}>{committee.name}</option>
        ))}
      </select>

      <textarea
        placeholder="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Send</button>
    </form>
  );
}
