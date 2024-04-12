'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './create-lesson-form.module.css';
import { postLesson, patchLesson } from '@/actions/lessons';
import { useLessonEdit } from '@/storage/use-edit';
import { useEffect } from 'react';

interface Inputs {
  age: number;
  name: string;
  src: string;
  text: string;
}

const CreateLessonForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { lessonData, isEditing, offEdit } = useLessonEdit((state) => state);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (isEditing) {
      patchLesson({
        ...getValues(),
        _id: lessonData._id,
      })
        .then(() => offEdit())
        .catch((e) => console.log(e));
      return;
    }
    postLesson(data);
    reset();
  };

  useEffect(() => {
      setValue('text', lessonData.text);
      setValue('age', lessonData.age);
      setValue('src', lessonData.src);
      setValue('name', lessonData.name);
  }, [setValue, lessonData]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Имя</label>
        <input className={styles.input} {...register('name', { 
          required: true
         })}/>
         {errors.name && <span className={styles.error}>Поле необходимо заполнить</span>}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Возраст</label>
        <input type='number' className={styles.input} {...register('age', {
          required: true,
          
        })}/>
        {errors.age && <span className={styles.error}>Поле необходимо заполнить</span>}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Текст</label>
        <textarea className={styles.textarea} {...register('text', {
          required: true
        })}/>
        {errors.text && <span className={styles.error}>Поле необходимо заполнить</span>}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Ссылка на видео Youtube</label>
        <input className={styles.input} {...register('src', {
          required: true
        })}/>
        {errors.src && <span className={styles.error}>Поле необходимо заполнить</span>}
      </fieldset>

      <button className={styles.submit} type='submit'>{isEditing ? 'Редактировать' : 'Создать' }</button>
    </form>
  );
};
export default CreateLessonForm;
