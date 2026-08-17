import { useState } from 'react';
import styles from './StudentForm.module.css';

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [status, setStatus] = useState('Regular');
  const [gwa, setGwa] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ name, course, yearLevel, status, gwa: parseFloat(gwa) });
    setName('');
    setCourse('');
    setYearLevel('');
    setStatus('Regular');
    setGwa('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input className={styles.input} placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} required />
      <input className={styles.input} placeholder="Year Level" value={yearLevel} onChange={(e) => setYearLevel(e.target.value)} required />
      <select className={styles.input} value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Regular">Regular</option>
        <option value="Irregular">Irregular</option>
        <option value="On Probation">On Probation</option>
      </select>
      <input className={styles.input} placeholder="GWA (e.g. 1.75)" value={gwa} onChange={(e) => setGwa(e.target.value)} required />
      <button type="submit">Add Student</button>
    </form>
  );
}