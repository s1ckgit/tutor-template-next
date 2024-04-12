'use client';

import cn from 'classnames';

import Button from '../Button/Button';
import styles from './Hero.module.css';

import Popover from '../ui/Popover/Popover';
import Contacts from '../Contacts/Contacts';

const Hero = () => {

  return (
    <>
      <section className={styles.hero}>
        <div className={cn('container', styles.container)}>
          <div className={styles.info}>
              <h1 className={styles.title}>Специальность <br /> Имя Фамилия</h1>
              <p className={styles.desc}>Добро пожаловать на мой сайт! Здесь вы можете ознакомиться со всей интересующей Вас информацией и записаться на занятие.
              </p>
              <div className={styles.buttons}>
                <Popover content={<Contacts />}>
                  <Button variant='primary' className={styles.button}>Записаться</Button>
                </Popover>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
