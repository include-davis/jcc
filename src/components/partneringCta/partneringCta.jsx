import styles from "./partneringCta.module.scss";

export default function PartneringCta({
  ctaHref = "/partnerships",
}) {
  return (
    <section
      className={styles.frame77}
      aria-labelledby="partnering-cta-heading"
      data-node-id="2488:2425"
    >
      <div className={styles.frame345} data-node-id="2745:2801">
        <div className={styles.frame344} data-node-id="2745:2800">
          <div className={styles.headingFrame} data-node-id="2488:2426">
            <h2
              id="partnering-cta-heading"
              className={styles.title}
              data-node-id="2488:2427"
            >
              Interested In Partnering?
            </h2>
          </div>
          <p className={styles.body} data-node-id="2488:2428">
            Ready to make a lasting impact? By partnering with JCC,
            you&apos;ll join a passionate community dedicated to improving the
            health and well-being of underserved youth. Together, we can break
            down barriers to care and create meaningful change — one child at a
            time.
          </p>
        </div>
        <a
          className={styles.cta}
          href={ctaHref}
          data-node-id="2488:2429"
          data-name="Join us CTA/Default"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
