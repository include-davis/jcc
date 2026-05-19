import React from "react";
import styles from "./partnerships-carousel-cards.module.scss";

export default function PartnershipsCarouselCards({ image, title}) {
    return (
        <div className={styles.carouselCard}>
            <img src={image} alt={title} className={styles.logo}/>
        </div>
    );
}