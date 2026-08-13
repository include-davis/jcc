"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styles from "./home.module.scss";

export default function HeroSlideshow({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className={styles.sectionTop}>
      <div className={styles.img_container}> {/* Image container to write over the image */}
        <div className={styles.dots}>  {/* made a separate div element for the dots at bottom to indiciate which slide user is on*/}
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.dot_active : ''}`}
              onClick={() => setCurrentSlide(index)}
              />
          ))}
        </div>

        <img src={slides[currentSlide].img} alt={slides[currentSlide].title} className={styles.image} />  {/* Uploading the background image */}
        <img src="/gradient.svg" alt="" className={styles.gradient_overlay} />  {/* Uploading the gradient for background image */}

        {/*  Div element for the text, different padding for slide 2 and 4 to keep up the aesthetic
        Got the text on slide from the slides array
        Also added small tag buttons for the first slide
        */}
        <div className={styles.content_left}
          style={
            currentSlide === 1 ? { paddingTop: '2rem' } :
            currentSlide === 3 ? { paddingTop: '3.35rem' } :
            {}}>
          <p className={styles.slide_label}>{slides[currentSlide].label}</p>
          <h1 className={styles.clinic_heading}>{slides[currentSlide].title}</h1>
          <p className={styles.clinic_subheading}>{slides[currentSlide].subtitle}</p>
          {slides[currentSlide].tags && (
            <div className={styles.tags}>
              {slides[currentSlide].tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}

            </div>
          )}
          {/* Div element for the button with that links to different pages for more information
          got its txt from the slides array
          */}
          <Link href={slides[currentSlide].btnLink} className={styles.learn_more_btn}>
            <span>
              {slides[currentSlide].btnText}
              <span className={styles.arrow}>
                <FaArrowRight />
              </span>
            </span>
          </Link>
        </div>

        {/*Buttons for moving through the slides*/}
        <button className={styles.arrow_left} onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
          ‹
        </button>
        <button className={styles.arrow_right} onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
          ›
        </button>
      </div>
    </section>
  );
}
