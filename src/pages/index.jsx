import React, { useState } from "react";
import Link from "next/link";
import styles from "./home.module.scss";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const committees = [
    {
      title: (
        <>
          Mental Health & <br />
          Wellness Committee
        </>
      ),
      image: "/Mental_Health_and_Wellness_Logo.png",
      route: "/committees_mental",
    },
    {
      title: (
        <>
          Community Outreach <br />
          Committee
        </>
      ),
      image: "/Community_Outreach_Logo.png",
      route: "/committees_community",
    },
    {
      title: (
        <>
          Physical & <br />
          Integrated Committee
        </>
      ),
      image: "/Physical_and_Integrated_Health_Logo.png",
      route: "/committees_physical",
    },
    {
      title: (
        <>
          Sexual & <br />
          Reproductive Committee
        </>
      ),
      image: "/SNR_Logo.png",
      route: "/committees_sexual",
    },
    {
      title: (
        <>
          Dental Health <br />
          Committee
        </>
      ),
      image: "/Dental_Health_Logo.png",
      route: "/committees_dental",
    },
  ];

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
    <main className={styles.container}>

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

      <section className={styles.sectionMiddle}>
        <section className={styles.OurMissionContainer}>
          <article className={styles.OurMissionLeftContent}>
            <h2 className={styles.MissionTitle}>Our Mission</h2>

            <p className={styles.MissionText}>
              <span className={styles.BoldIntro}>
                In Juvenile Caduceus Clinic,
              </span>{" "}
              we aim to deliver high-quality care and assistance to the
              underprivileged youth and older adolescents who are struggling and
              seek help. Addressing the public health issues regarding a child’s
              well-being including but not limited to childhood obesity, physical
              activity, cognitive health, and stress is fundamental in building
              an environment for all children to thrive in. By integrating the
              four pillars of leadership, humility, empathy, and responsibility,
              our goal is to work together to provide equal care with respect to
              social, mental, dental, and overall health to children in
              adolescent institutions and programs.
            </p>
          </article>

          <figure className={styles.MissionImgCircle}>
            <img
              className={styles.MissionImg}
              src="/jcc_logo.png"
              alt="JCC Logo"
            />
          </figure>
        </section>

        <section className={styles.OurCommitteesContainer}>
          <header className={styles.OurCommitteesTopContent}>
            <h2 className={styles.OurCommitteesTitle}>Our Committees</h2>

            <p className={styles.OurCommitteesDescription}>
              Our Clinic consists of 5 different committees all focused on a
              different area of health care. Learn more about each committee by
              clicking the links below
            </p>
          </header>
  

          <section className={styles.OurCommitteesBottomContent}>
            {committees.map((committee) => (
              <article className={styles.CommitteeItem} key={committee.route}>
                <img
                  className={styles.CommitteeIcon}
                  src={committee.image}
                  alt="Committee logo"
                />

                <Link href={committee.route} className={styles.CommitteeButton}>
                  <span className={styles.CommitteeButtonText}>
                    {committee.title}
                  </span>

                  <img
                    className={styles.CommitteeArrowIcon}
                    src="/Our_Committees_Arrow.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </Link>
              </article>
            ))}
          </section>
        </section>
      </section>
    
      <div className={styles.sectionBottom}>
        <div className={styles.learnMoreCard}>
          <h2 className={styles.learnMoreTitle}>Recruitment</h2>

          <p className={styles.learnMoreText}>
            Want to learn more about our clinic and how to get involved? Click here to learn more about our recruitment process.
          </p>
          <Link href="/contact" className={styles.secondaryButton}>
            Join Us 
          </Link>
        </div>
      </div>
    </main>
  );
}