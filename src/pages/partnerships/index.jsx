import React from "react";
import PartneringCta from "@/components/partneringCta/partneringCta";
import styles from "./partnerships.module.scss";

export default function Partnerships() {
  return (
    <main className={styles.page}>
      <h1 className={styles.srOnly}>Partnerships</h1>
      <PartneringCta ctaHref="/contact" />
    </main>
  );
}
