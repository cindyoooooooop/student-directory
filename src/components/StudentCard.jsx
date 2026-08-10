import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const isDeansLister = student.gwa <= 1.75;
  const isProbation = student.status === 'On Probation';

  const cardClass = isProbation
    ? `${styles.card} ${styles.probation}`
    : styles.card;

  return (
    <div className={cardClass}>
      <h3>{student.name}</h3>
      <p>{student.course} - Year {student.yearLevel}</p>
      <p>{isProbation ? 'On Probation' : student.status}</p>
      <p>GWA: {student.gwa}</p>
      {isDeansLister && <span className={styles.badge}>Dean's Lister</span>}
    </div>
  );
}