import React from 'react';
import styles from "./home.module.scss";
import { useState } from 'react';

export default function Home() {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "/first.svg",
      label: "OUR MISSION",
      title: "High-quality care for those who need it most.",
      subtitle: "We deliver care and assistance to underprivileged communities facing higher risk for toxic stress — using an intersectional approach that acknowledges the signs, symptoms, and risks of trauma..",
      btnText: "Apply to Join",
      btnLink: "/join",
      align: "left",
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
      img: "/fourth.jpg",
      label: "OUR HISTORY",
      title: "Founded by students. Still is.",
      subtitle: "Learn how this clinic started, who built it, and the milestones that shaped what it is today.",
      btnText: "Read Our History",
      btnLink: "/history",
      align: "left",
    },
  ];
  
  return (
    <div className={styles.container}>
      {/* TODO: top-page section - Refer to Figma file for
         +design specs. Write your code here. */}
         {
        <div className={styles.img_container}>
        <img src={slides[currentSlide].img} alt={slides[currentSlide].title} className={styles.image} />
        <div className={styles.content_left}>
        <p className={styles.slide_label}>{slides[currentSlide].label}</p>
        <h1 className={styles.clinic_heading}>{slides[currentSlide].title}</h1>
        <p className={styles.clinic_subheading}>{slides[currentSlide].subtitle}</p>
        <a href={slides[currentSlide].btnLink} className={styles.learn_more_btn}>
            {slides[currentSlide].btnText} →
        </a>
        </div>

        <button className={styles.arrow_left} onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
        ‹
        </button>
        <button className={styles.arrow_right} onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
        ›
        </button>
         </div>
}
      <div className={styles.sectionTop}>
        top-page
      </div>

      {/* TODO: middle-page section - Refer to Figma file for
         + design specs. Write your code here. */}
      <div className={styles.sectionMiddle}>
        middle-page
      </div>

      {/* TODO: bottom-page section - Refer to Figma file for
         + design specs. Write your code here. */}
      <div className={styles.sectionBottom}>
        bottom-page
      </div>
    </div>
  );
}
