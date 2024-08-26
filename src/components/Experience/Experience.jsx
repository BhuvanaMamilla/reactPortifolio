import React from 'react';
import styles from './Experience.module.css';
import skillsData from '../../data/skills.json';
import historyData from '../../data/history.json';
import { getImageUrl } from '../../utils';

const Skills = ({ skills }) => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const ExperienceHistory = ({ history }) => {
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience</h2>
//       <div className={styles.content}>
//         <ul className={styles.history}>
//           {history.map((historyItem, index) => (
//             <li key={index} className={styles.historyItem}>
//               <img
//                 src={getImageUrl(historyItem.imageSrc)}
//                 alt={`${historyItem.organisation} Logo`}
//               />
//               <div className={styles.historyItemDetails}>
//                 <h3>
//                   {`${historyItem.role}, ${historyItem.organisation}`}
//                 </h3>
//                 <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
//                 <ul>
//                   {historyItem.experiences.map((experience, experienceIndex) => (
//                     <li key={experienceIndex}>{experience}</li>
//                   ))}
//                 </ul>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

export const Experience = () => {
  return (
    <>
      <Skills skills={skillsData} />
      {/* <ExperienceHistory history={historyData} /> */}
    </>
  );
};
