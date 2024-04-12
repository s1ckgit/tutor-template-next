import { getAllComments } from '@/actions/comments';
import styles from './comments.module.css';
import Comment from '../_components/comment/comment';
import CreateCommentForm from '../_components/create-comment-form/create-comment-form';

const Comments = async () => {
  let comments;
  try {
    comments = await getAllComments(true);
  } catch(e) {
    console.log(e);
  }

  return (
    <div className={styles.comments}>
      <h1 className={styles.header}>Отзывы</h1>
      <CreateCommentForm />
      {comments && (
        <ul className={styles.ul}>
          {comments.map((comment) => (
            <Comment _id={comment._id.toString()} key={comment._id.toString()} text={comment.text} name={comment.name} photo={comment.photo}></Comment>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Comments;
