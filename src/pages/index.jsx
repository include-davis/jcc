import React from 'react';
import styles from "./home.module.scss";
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  
  const [currentSlide, setCurrentSlide] = useState(0); // using useState to move through the slides

  // made a slides array for content of each slide
  const slides = [
    {
      img: "/first.svg",
      label: "OUR MISSION",
      title: "High-quality care for those who need it most.",
      subtitle: "We deliver care and assistance to underprivileged communities facing higher risk for toxic stress — using an intersectional approach that acknowledges the signs, symptoms, and risks of trauma..",
      btnText: "Apply to Join",
      tags: ["Leadership", "Empathy", "Responsibility"],
      btnLink: "/join",
      //align: "left",
    },
    {
      img: "/second.jpg",
      label: "OUR ALUMNI",
      title: "The clinic stays with you.",
      subtitle: "See where our alumni are today — from residencies to research, and the paths they carved after graduation.",
      btnText: "Meet Our Alumni",
      btnLink: "/events",
      align: "left",
    },
    {
      img: "/third.jpg",
      label: "COMMITTEES",
      title: "Every team keeps the clinic running.",
      subtitle: "From outreach to operations, our committees are student-led groups that power every part of the clinic experience.",
      btnText: "View Our Committees",
      btnLink: "/committees",
      align: "left",
    },
    {
      img: "/JCC Tabling (10_17).jpg",
      label: "OUR HISTORY",
      title: "Founded by students. Still is.",
      subtitle: "Learn how this clinic started, who built it, and the milestones that shaped what it is today.",
      btnText: "Read Our History",
      btnLink: "/history",
      align: "left",
      position: "center 70%",
    },
  ];
  
  return (
    <div className={styles.container}>
      {/* TODO: top-page section - Refer to Figma file for
         +design specs. Write your code here. */}

      <div className={styles.sectionTop}></div>
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
        <a href={slides[currentSlide].btnLink} className={styles.learn_more_btn}>
        <h6>{slides[currentSlide].btnText} <span className={styles.arrow}><FaArrowRight /></span></h6>
        </a>
        </div>
        {/*Buttons for moving through the slides*/}
        <button className={styles.arrow_left} onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
        ‹
        </button>
        <button className={styles.arrow_right} onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
        ›
        </button>
         </div>


      {/* TODO: middle-page section - Refer to Figma file for
         + design specs. Write your code here. */}
      <div className={styles.sectionMiddle}>
        middle-page
      </div>

      <div className={styles.sectionBottom}>
        <div className={styles.learnMoreCard}>
          <h2 className={styles.learnMoreTitle}>Recruitment</h2>

          <p className={styles.learnMoreText}>
            Want to learn more about our clinic and how to get involved? Click here to learn more about our recruitment process.
          </p>
          <a href="/contact" className={styles.secondaryButton}>
            Join Us 
          </a>
        </div>
      </div>
    </div>
  );
}
