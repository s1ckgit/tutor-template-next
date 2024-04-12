import { getAllLessons } from '@/actions/lessons';
import styles from './lessons.module.css';
import Lesson from '../_components/lesson/lesson';
import CreateLessonForm from '../_components/create-lesson-form/create-lesson-form';

const Lessons = async () => {
  const lessons = await getAllLessons(true);

  return (
    <div className={styles.lessons}>
      <h1 className={styles.header}>Уроки</h1>
      <CreateLessonForm />
      {lessons && (
        <ul className={styles.ul}>
          {lessons.map((lesson) => (
            <Lesson _id={lesson._id.toString()} key={lesson._id.toString()} age={lesson.age} name={lesson.name} text={lesson.text} src={lesson.src}></Lesson>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Lessons;
