import React from "react";
import styles from "./partnerships-carousel-cards.modules.scss";

export default function PartnershipsCarouselCards({ images, title}) {
    return (
        <div className={styles.carouselCard}>
            <img src={image} alt={title} className={styles.logo}/>
        </div>
    );
}