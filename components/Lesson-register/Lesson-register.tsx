'use client';

import cn from 'classnames';
import Image from 'next/image';

import styles from './Lesson-legister.module.css';
import Button from '../Button/Button';

import owl from '@/public/svg/owl_4.svg?url';
import letter from '@/public/svg/letter.svg?url';
import Contacts from '../Contacts/Contacts';
import Popover from '../ui/Popover/Popover';

const LessonRegister = () => {

  return (
    <>
      <section id='register' className={styles.section}>
        <div className={styles.decor}>
          <Image className={styles.letter} src={letter} alt='decor' width={200} height={200}/>
          <Image className={styles.owl} src={owl} alt='decor' width={200} height={250}/>
        </div>
          <div className={cn('container', styles.container)}>
            <h2 className={cn(styles.title)}>Запишитесь на занятие прямо сейчас!</h2>
            <p className={cn(styles.desc)}>
            What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass there were no blades.
            </p>
            <Popover content={<Contacts />}>
              <Button variant='primary'>Запись</Button>
            </Popover>
          </div>
      </section>
    </>    
  );
};

export default LessonRegister;
