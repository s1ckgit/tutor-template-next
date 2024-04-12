import cn from 'classnames';

import { getAllComments } from '@/actions/comments';

import Comment from '../Comment/Comment';

import styles from './Comments-section.module.css';

const CommentsSection = async () => {
  let comments;
  try {
    comments = await getAllComments(true);
  } catch(e) {
    console.log(e);
  }

  return (
    <section className={styles.section}>
        <div className={cn('container', styles.container)} id='reviews'>
            <div className={styles.info}>
                <h2 className={styles.title}>Заголовок</h2>
                <h3 className={styles.subtitle}>Подзаголовок</h3>
                <p className={styles.desc}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius placerat turpis, ut faucibus ex 
                  fermentum at. In turpis ex, laoreet in suscipit.
                </p>
            </div>
            {comments && <Comment data={comments}/>}
        </div>
    </section>
  );
};

export default CommentsSection;
