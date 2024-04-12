'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './create-post-form.module.css';
import { makePost, patchPost } from '@/actions/posts';
import { usePostEdit } from '@/storage/use-edit';
import { useEffect } from 'react';

interface Inputs {
  title: string;
  text: string;
}

const CreatePostForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { postData, isEditing, offEdit } = usePostEdit((state) => state);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (isEditing) {
      patchPost({
        ...getValues(),
        _id: postData._id,
      })
        .then(() => offEdit())
        .catch((e) => console.log(e));
      return;
    }
    makePost(data);
    reset();
  };

  useEffect(() => {
      setValue('text', postData.text);
      setValue('title', postData.title);
  }, [setValue, postData]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Заголовок</label>
        <input className={styles.input} {...register('title', { 
          required: true
         })}/>
         {errors.title && <span className={styles.error}>Поле необходимо заполнить</span>}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Текст</label>
        <textarea className={styles.textarea} {...register('text', {
          required: true
        })}/>
        {errors.text && <span className={styles.error}>Поле необходимо заполнить</span>}
      </fieldset>

      <button className={styles.submit} type='submit'>{isEditing ? 'Редактировать' : 'Создать' }</button>
    </form>
  );
};
export default CreatePostForm;
