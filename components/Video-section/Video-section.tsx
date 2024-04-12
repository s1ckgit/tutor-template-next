import cn from 'classnames';
import Image from 'next/image';

import styles from './Video-section.module.css';

import owl from '@/public/SVG/owl_2.svg?url';
import { getAllLessons } from '@/actions/lessons';
import VideoCards from '../Video-cards/Video-cards';

const VideoSection = async () => {
  const lessons = await getAllLessons(true);

  return (
    <section id='videos' className={styles.section}>
      <div className={cn('container', styles.container)}>
        <Image className={styles.owl} src={owl} alt='decor' width={275} height={150}/>
        <h2 className={styles.title}>Как проходят наши уроки</h2>
        <VideoCards data={lessons}/>
      </div>
    </section>
  );
};

export default VideoSection;
