'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Button from '@/components/Button/Button';

import { LoginSchema } from '@/schemas';

import styles from './auth.module.css';
import { login } from '@/actions/auth-admin';

const AuthPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onSubmit',
    shouldFocusError: false
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      await login(values);
    } catch(e) {
      setError('root', {
        message: 'Что-то пошло не так...'
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <fieldset className={styles.fieldset}>
            <label className={styles.label}>Логин</label>
            <input {...register('username', { required: true })} className={styles.input} />
            <span className={styles.error}>{(errors.password || errors.username) && 'Неверное имя пользователя или пароль'}</span>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label className={styles.label}>Пароль</label>
            <input {...register('password', { required: true })} type='password' className={styles.input} />
            <span className={styles.error}>{(errors.password || errors.username) && 'Неверное имя пользователя или пароль'}</span>
          </fieldset>

          <span className={styles.error}>{errors.root && errors.root.message}</span>
          <Button type='submit' className={styles.submit} variant='primary'>Войти</Button>
        </form>
      </div>
    </div>
  );
};
export default AuthPage;
