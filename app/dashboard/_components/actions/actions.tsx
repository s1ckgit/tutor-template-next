import cn from 'classnames';
import { TrashIcon, Pencil2Icon, CrossCircledIcon } from '@radix-ui/react-icons';

import styles from './actions.module.css';

interface ActionsProps {
  editFunc: () => void;
  deleteFunc: () => void;
  isEditing: boolean;
  isHovered: boolean;
}

const Actions = ({
  editFunc,
  deleteFunc,
  isEditing,
  isHovered
}: ActionsProps) => {
  return (
    <div className={cn(styles.actions, {
      [styles.visible]: isHovered || isEditing
    })}>
      <button className={styles.edit} onClick={editFunc} >
        {isEditing ? <CrossCircledIcon className={styles.icon} /> : <Pencil2Icon className={styles.icon} />}
      </button>
      <button className={styles.delete} onClick={deleteFunc}><TrashIcon className={styles.icon} /></button>
    </div>
  );
};
export default Actions;
