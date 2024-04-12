import cn from 'classnames';
// import Image from 'next/image';

import styles from './Features-section.module.css';

// import round_1 from '@/public/round_1.svg?url';
// import round_2 from '@/public/round_2.svg?url';
// import round_3 from '@/public/round_3.svg?url';

import FEATURE_1 from '@/public/features/feature_1.svg';
import FEATURE_2 from '@/public/features/feature_2.svg';
import FEATURE_3 from '@/public/features/feature_3.svg';
import FEATURE_4 from '@/public/features/feature_4.svg';
import FEATURE_5 from '@/public/features/feature_5.svg';
import FEATURE_6 from '@/public/features/feature_6.svg';

const FeaturesSection = () => {
  return (
    <section className={styles.section}>
      <div className={cn('container', styles.container)}>
        <div className={styles.info}>
            <h2 className={styles.title}>Заголовок</h2>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac nunc vel urna sollicitudin lacinia.</p>
        </div>
          <div className={styles.feature}>
              <div className={cn(styles.round, styles.roundFirst)}>
                  <FEATURE_1 className={styles.featureSVG}/>
              </div>
              <div className={styles.featureInfo}>
                  <h3 className={styles.subtitle}>Заголовок</h3>
                  <p className={styles.featureText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac massa ex. 
                    Morbi consequat sem eget mi accumsan aliquet. Nam finibus gravida orci, a elementum tellus scelerisque non. 
                    Aliquam erat.
                  </p>
              </div>
          </div>
          <div className={styles.feature}>
              <div className={cn(styles.round, styles.roundSecond)}>
                  <FEATURE_2 className={styles.featureSVG}/>
              </div>
              <div className={styles.featureInfo}>
                  <h3 className={styles.subtitle}>Заголовок</h3>
                  <p className={styles.featureText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac massa ex. 
                    Morbi consequat sem eget mi accumsan aliquet. Nam finibus gravida orci, a elementum tellus scelerisque non. 
                    Aliquam erat.
                  </p>
              </div>
          </div>
          <div className={styles.feature}>
              <div className={cn(styles.round, styles.roundThird)}>
                  <FEATURE_3 className={styles.featureSVG}/>
              </div>
              <div className={styles.featureInfo}>
                  <h3 className={styles.subtitle}>Заголовок</h3>
                  <p className={styles.featureText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac massa ex. 
                    Morbi consequat sem eget mi accumsan aliquet. Nam finibus gravida orci, a elementum tellus scelerisque non. 
                    Aliquam erat.
                  </p>
              </div>
          </div>
          <div className={styles.feature}>
              <div className={cn(styles.round, styles.roundFourth)}>
                  <FEATURE_4 className={styles.featureSVG}/>
              </div>
              <div className={styles.featureInfo}>
                  <h3 className={styles.subtitle}>Заголовок</h3>
                  <p className={styles.featureText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac massa ex. 
                    Morbi consequat sem eget mi accumsan aliquet. Nam finibus gravida orci, a elementum tellus scelerisque non. 
                    Aliquam erat.
                  </p>
              </div>
          </div>
          <div className={styles.feature}>
              <div className={cn(styles.round, styles.roundFifth)}>
                  <FEATURE_5 className={styles.featureSVG}/>
              </div>
              <div className={styles.featureInfo}>
                  <h3 className={styles.subtitle}>Заголовок</h3>
                  <p className={styles.featureText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac massa ex. 
                    Morbi consequat sem eget mi accumsan aliquet. Nam finibus gravida orci, a elementum tellus scelerisque non. 
                    Aliquam erat.
                  </p>
              </div>
          </div>
          <div className={styles.feature}>
              <div className={cn(styles.round, styles.roundSixth)}>
                  <FEATURE_6 className={styles.featureSVG}/>
              </div>
              <div className={styles.featureInfo}>
                  <h3 className={styles.subtitle}>Заголовок</h3>
                  <p className={styles.featureText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac massa ex. 
                    Morbi consequat sem eget mi accumsan aliquet. Nam finibus gravida orci, a elementum tellus scelerisque non.
                    Aliquam erat.
                  </p>
              </div>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default FeaturesSection;
