"use client";

import { useEffect, useState } from "react";
import styles from "./hero.module.scss";

const SLIDE_DURATION_MS = 5000;

export default function Hero({ title, description, buttons = [], tags = [], images = [], imageAlt = "" }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [paused, images.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.heroTextContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDescription}>{description}</p>
        {tags.length > 0 && (
          <div className={styles.heroTags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.heroTag}>{tag}</span>
            ))}
          </div>
        )}
        {buttons.length > 0 && (
          <div className={styles.heroButtons}>
            {buttons.map((btn) =>
              btn.href ? (
                <a key={btn.label} href={btn.href} className={styles.heroBtn}>{btn.label}</a>
              ) : (
                <button key={btn.label} type="button" className={styles.heroBtn}>{btn.label}</button>
              )
            )}
          </div>
        )}
      </div>

      <div
        className={styles.heroImageContainer}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={imageAlt}
            className={`${styles.heroImage} ${i === index ? styles.heroImageActive : ""} ${paused && i === index ? styles.heroImageHovered : ""}`}
          />
        ))}

        {images.length > 1 && (
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show image ${i + 1}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
