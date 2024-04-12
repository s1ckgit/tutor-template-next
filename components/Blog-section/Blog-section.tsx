import styles from './Blog-section.module.css';
import cn from 'classnames';
import { getAllPosts } from '@/actions/posts';
import BlogPosts from '../Blog-posts/Blog-posts';

const BlogSection = async () => {
  let posts;
  try {
    posts = await getAllPosts(true);
  } catch(e) {
    console.log(e);
  }

  return (
    <section id='last-news' className={styles.section}>
        <div className={cn('container', styles.container)}>
            <h2 className={styles.title}>Заголовок</h2>
            <h3 className={styles.subtitle}>Подзаголовок</h3>
            {posts && <BlogPosts data={posts} />}
        </div>
    </section>
  );
};

export default BlogSection;
