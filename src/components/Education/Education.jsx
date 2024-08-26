import React from "react";
import styles from "./Education.module.css";
import educationData from "../../data/education.json";
import { EducationCard } from "./EducationCard";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.education}>
        {educationData.map((eduCard, id) => (
          <EducationCard key={id} eduCard={eduCard} />
        ))}
      </div>
    </section>
  );
};
