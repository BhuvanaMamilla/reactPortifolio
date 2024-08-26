import React from "react";
import styles from "./EducationCard.module.css";
import { getImageUrl } from "../../utils";

export const EducationCard = ({ eduCard }) => {
  const { title, imageSrc, description, date } = eduCard;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.date}>{date}</p>
      
    </div>
  );
};
