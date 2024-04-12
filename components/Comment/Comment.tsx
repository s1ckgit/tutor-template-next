'use client';
import Image from 'next/image';
import cn from 'classnames';
import { useState, useRef } from 'react';

import styles from './Comment.module.css';

import LeftButtonIcon from '@/public/svg/left.svg';
import RightButtonIcon from '@/public/svg/right.svg';
import Shape from '@/public/svg/Shape.svg?url';
import Polygon from '@/public/svg/Polygon.svg?url';
import Oval from '@/public/svg/Oval.svg?url';
import owl from '@/public/svg/owl_3.svg?url';
import { useSlider } from '@/hooks/use-slider';
import Tooltip from '../ui/Tooltip/Tooltip';

interface DataProps {
  photo: string
  name: string
  text: string
}

interface CommentProps {
  data: DataProps[];
}

const Comment = ({ data }: CommentProps): JSX.Element => {
  const maxIndex = data.length - 1;

  const { index, toggleUp, toggleDown } = useSlider(maxIndex);
  const [isDisabled, setIsDisabled] = useState(false);

  const currentComment = data[index];  
  const { photo, text, name } = currentComment;

  const imageElement = useRef<HTMLDivElement>(null);
  const textElement = useRef<HTMLParagraphElement>(null);
  const nameElement = useRef<HTMLHeadingElement>(null);

function toggleAnimation() {
  setIsDisabled(true);
  imageElement?.current?.classList.add(styles.fadeIn);
  textElement?.current?.classList.add(styles.fadeIn);
  nameElement?.current?.classList.add(styles.fadeIn);
}

function onRightButtonClick() {
    toggleUp();
    toggleAnimation();
}

function onLeftButtonClick() {
    toggleDown();
    toggleAnimation();
}

function onAnimationEnd() {
  setIsDisabled(false);
  imageElement?.current?.classList.remove(styles.fadeIn);
  textElement?.current?.classList.remove(styles.fadeIn);
  nameElement?.current?.classList.remove(styles.fadeIn);
}

  return (
    <div className={styles.comment}>
        <Image className={styles.owl} src={owl} alt='decor' width={250} height={150}/>
        <Image width={35} height={35} className={styles.oval} src={Oval} alt='decor'/>
        <Image className={styles.polygon} src={Polygon} width={41} height={41} alt='decor'/>
        <Image className={styles.shape} width={60} height={45} src={Shape} alt='decor'/>
        <div onAnimationEnd={onAnimationEnd} ref={imageElement} className={styles.photo}>
          <Image className={cn(styles.image)} alt='pic' fill={true} src={photo} />
        </div>
        <p ref={textElement} className={styles.text}>{text}</p>
        <div className={styles.buttons}>
            <Tooltip side='bottom' content='Предыдущий отзыв'>
              <button disabled={isDisabled} onClick={onLeftButtonClick} className={styles.button}>
                  <LeftButtonIcon />
              </button>
            </Tooltip>
            <Tooltip side='bottom' content='Следующий отзыв'>
              <button disabled={isDisabled} onClick={onRightButtonClick} className={styles.button}>
                  <RightButtonIcon />
              </button>
            </Tooltip>
        </div>
        <h3 ref={nameElement} className={styles.name}>{name}</h3>
    </div>
  );
};

export default Comment;
