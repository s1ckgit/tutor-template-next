import { getAllPosts } from '@/actions/posts';
import styles from './posts.module.css';
import Post from '../_components/post/post';
import CreatePostForm from '../_components/create-post-form/create-post-form';

const Posts = async () => {
  const posts = await getAllPosts();

  return (
    <div className={styles.posts}>
      <h1 className={styles.header}>Посты</h1>
      <CreatePostForm />
      {posts && (
        <ul className={styles.ul}>
          {posts.map((post) => (
            <Post _id={post._id.toString()} key={post._id.toString()} text={post.text} title={post.title}></Post>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Posts;
