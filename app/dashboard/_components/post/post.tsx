'use client';

import { useHover } from 'usehooks-ts';
import { useRef } from 'react';

import { deletePost } from "@/actions/posts";
import { usePostEdit } from "@/storage/use-edit";

import Actions from '../actions/actions';

import styles from './post.module.css';


interface PostProps {
  _id: string;
  title: string;
  text: string;
}

const Post = ({
  _id,
  title,
  text
}: PostProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const { isEditing, onEdit, offEdit } = usePostEdit((state) => state);
  const isHovered = useHover(ref);

  const onDelete = () => {
    deletePost(_id);
  };
  const onEditFunc = isEditing ? offEdit : () => onEdit({
    title,
    text,
    _id
  });

  return (
    <li ref={ref} className={styles.post} key={_id.toString()}>
      <h3>
        Заголовок: {title}
      </h3>
      <p>
        Текст: {text}
      </p>
      <Actions editFunc={onEditFunc} deleteFunc={onDelete} isEditing={isEditing} isHovered={isHovered}/>
    </li>
  );
};
export default Post;
