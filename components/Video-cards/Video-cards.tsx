'use client';
import { useEffect, useState } from 'react';
import { VideoCardProps } from '../Video-card/Video-card.props';
import styles from './Video-cards.module.css';
import VideoCard from '../Video-card/Video-card';
import { useMediaQuery } from 'usehooks-ts';
import Tooltip from '../ui/Tooltip/Tooltip';

interface VideoCardsProps {
  data: VideoCardProps[]
}

const VideoCards = ({
  data
}: VideoCardsProps) => {
  const twoCols = useMediaQuery('(max-width: 1201px)');
  const oneCol = useMediaQuery('(max-width: 768px)');
  const [toRenderCount, setToTenderCount] = useState<number | null>(null);
  const onClick = () => {
    setToTenderCount(val => {
      if (twoCols && !oneCol) {
        return val! + 2;
      } else if (oneCol) {
        return val! + 1;
      } else {
        return val! + 3;
      }
    });
  };

  useEffect(() => {
    setToTenderCount(twoCols && !oneCol ? 4 : oneCol ? 1 : 3);
  }, [twoCols, oneCol]);

  return (
    <>
      <div className={styles.cards}>
        {toRenderCount && data.map((card, i) => {
          while (i < toRenderCount) {
            return <VideoCard src={card.src} name={card.name} age={card.age} text={card.text} key={card._id as string} />;
          }
        })}
      </div>
      {toRenderCount && (data.length > toRenderCount) && (
        <Tooltip side='bottom' content='Показать больше'>
          <button className={styles.button} onClick={onClick} />
        </Tooltip>
      )}
    </>
  );
};
export default VideoCards;
