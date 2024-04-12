import cn from 'classnames';
import Image from 'next/image';

import styles from './About.module.css';

import owl from '@/public/SVG/owl.svg?url';

const About = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Image className={styles.owl} alt='decor' src={owl} width={150} height={300}/>
      <div className={cn('container', styles.container)} id='about'>
        <div className={styles.picture}></div>
        <div className={styles.info}>
          <h2 className={styles.title}>Заголовок</h2>
          <h3 className={styles.subtitle}>Подзаголовок</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper neque at arcu dapibus venenatis. 
            Aenean lobortis eget sem at tempus. Duis posuere ac mauris a ultricies. Phasellus accumsan pellentesque interdum. 
            Cras ac dui non libero feugiat sagittis. Aliquam non augue vitae elit dictum placerat in et ligula. 
            Sed lobortis velit id odio maximus, sit amet tristique tellus blandit. 
            Aliquam elit nulla, pretium sed enim id, consequat aliquet felis. 
            Morbi non enim ultricies, cursus lorem eget, pretium ligula. Praesent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
