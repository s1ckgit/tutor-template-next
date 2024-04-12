'use client';

import Image from 'next/image';
import { useHover } from 'usehooks-ts';
import { useRef } from 'react';

import { deleteComment } from "@/actions/comments";
import { useCommentEdit } from "@/storage/use-edit";

import Actions from '../actions/actions';

import styles from './comment.module.css';


interface CommentProps {
  _id: string;
  name: string;
  photo: string;
  text: string;
}

const Comment = ({
  _id,
  name,
  text,
  photo
}: CommentProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const { isEditing, onEdit, offEdit } = useCommentEdit((state) => state);
  const isHovered = useHover(ref);

  const onDelete = () => {
    deleteComment(_id);
  };
  const onEditFunc = isEditing ? offEdit : () => onEdit({
    name,
    text,
    photo,
    _id
  });

  return (
    <li ref={ref} className={styles.comment} key={_id.toString()}>
      <h3>
        Имя: {name}
      </h3>
      <p>
        Текст: {text}
      </p>
      <Image className={styles.photo} src={photo} alt='фото' width={100} height={100}/>
      <Actions editFunc={onEditFunc} deleteFunc={onDelete} isEditing={isEditing} isHovered={isHovered}/>
    </li>
  );
};
export default Comment;
