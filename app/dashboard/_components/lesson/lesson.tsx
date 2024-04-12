'use client';

import { deleteLesson } from "@/actions/lessons";

import styles from './lesson.module.css';
import { useLessonEdit } from "@/storage/use-edit";
import Actions from '../actions/actions';
import { useHover } from 'usehooks-ts';
import { useRef } from 'react';


interface LessonProps {
  _id: string ;
  age: number;
  name: string;
  src: string;
  text: string;
}

const Lesson = ({
  _id,
  age,
  name,
  src,
  text
}: LessonProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const { isEditing, onEdit, offEdit } = useLessonEdit((state) => state);
  const isHovered = useHover(ref);

  const onDelete = () => {
    deleteLesson(_id);
  };

  const onEditFunc = isEditing ? offEdit : () => onEdit({
    age,
    src,
    name,
    text,
    _id
  });

  return (
    <li ref={ref} className={styles.lesson} key={_id.toString()}>
      <h3>
        Имя: {name}, Возраст {age}
      </h3>
      <p>
        Текст: {text}
      </p>
      <Actions editFunc={onEditFunc} deleteFunc={onDelete} isEditing={isEditing} isHovered={isHovered}/>
    </li>
  );
};
export default Lesson;
