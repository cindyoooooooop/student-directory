import { useState } from 'react';
import { initialStudents } from './data/initialStudents';
import StudentDirectory from './components/StudentDirectory';
import StudentForm from './components/StudentForm';
import DirectoryControls from './components/DirectoryControls';
import styles from './App.module.css';

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  function handleAddStudent(newStudent) {
    const studentWithId = { ...newStudent, id: Date.now() };
    setStudents([...students, studentWithId]);
  }

  let visibleStudents = students;

  if (searchTerm !== '') {
    visibleStudents = visibleStudents.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (statusFilter === 'deansLister') {
    visibleStudents = visibleStudents.filter(student => student.gwa <= 1.75);
  } else if (statusFilter === 'probation') {
    visibleStudents = visibleStudents.filter(student => student.status === 'On Probation');
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>🎓 Student Directory</h1>
        <p className={styles.subtitle}>University of Cabuyao</p>
      </div>
      <div className={styles.container}>
        <StudentForm onAdd={handleAddStudent} />
        <DirectoryControls
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />
        <StudentDirectory students={visibleStudents} />
      </div>
    </div>
  );
}