import { useState } from 'react';
import styles from './Video-card.module.css';

import type { VideoCardProps } from './Video-card.props';

const VideoCard = ({ src, name, age, text }: VideoCardProps): JSX.Element => {
  const [animationEnded, setAnimationEnded] = useState(false);

  return (
    <div 
      className={styles.card}
      onAnimationEnd={() => setAnimationEnded(true)}
    >
      {animationEnded && (
        <div className={styles.video}>
          <iframe className={styles.iframe} src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      )}
      <div className={styles.description}>
        <h3 className={styles.name}>{name}, {age}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default VideoCard;
