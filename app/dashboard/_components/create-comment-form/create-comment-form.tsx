'use client';

import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './create-comment-form.module.css';

import { postComment, patchComment } from '@/actions/comments';
import { useCommentEdit } from '@/storage/use-edit';
import { UploadButton } from '@/lib/uploadthing';

interface Inputs {
  name: string;
  text: string;
  photo: string;
}

const CreateCommentForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { commentData, isEditing, offEdit } = useCommentEdit((state) => state);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (isEditing) {
      patchComment({
        ...getValues(),
        _id: commentData._id,
      })
        .then(() => offEdit())
        .catch((e) => console.log(e));
      return;
    }
    postComment(data);
    reset();
  };

  useEffect(() => {
      setValue('text', commentData.text);
      setValue('name', commentData.name);
      setValue('photo', commentData.photo);
  }, [setValue, commentData]);

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
        <label className={styles.label}>Текст</label>
        <textarea className={styles.textarea} {...register('text', {
          required: true
        })}/>
        {errors.text && <span className={styles.error}>Поле необходимо заполнить</span>}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <label className={styles.label}>Ссылка на фото</label>
        <input readOnly className={styles.input} {...register('photo', {
          required: true
        })}/>
        {errors.photo && <span className={styles.error}>Поле необходимо заполнить</span>}
      </fieldset>

      <UploadButton 
        endpoint='photoUploader'
        onClientUploadComplete={(res) => {
          setValue('photo', res?.[0]?.url);
        }}
      />

      <button className={styles.submit} type='submit'>{isEditing ? 'Редактировать' : 'Создать' }</button>
    </form>
  );
};
export default CreateCommentForm;
