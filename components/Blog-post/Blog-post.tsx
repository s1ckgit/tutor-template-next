import styles from './Blog-post.module.css';
import Image from 'next/image';
import shape1 from '@/public/1x/shape.png';
import shape2 from '@/public/1x/shape2.png';
import shape3 from '@/public/1x/shape3.png';
import shape4 from '@/public/1x/shape4.png';

interface BlogPostProps {
  title: React.ReactNode
  text: React.ReactNode
  createdAt: Date | string
}

const BlogPost = ({ title, text, createdAt }: BlogPostProps) => {
  const date = new Date(createdAt);
  const days = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <div className={styles.post}>
      <Image className={styles.shape1} src={shape1} alt='decor' width={100} height={50}/>
      <Image className={styles.shape2} src={shape2} alt='decor' width={25} height={25}/>
      <Image className={styles.shape3} src={shape3} alt='decor' width={125} height={20}/>
      <Image className={styles.shape4} src={shape4} alt='decor' width={100} height={50}/>
      <h4 className={styles.postTitle}>{title}</h4>
      <p className={styles.postText}>{text}</p>
      <div className={styles.postDate}>{`${days}.${month}.${year}`}</div>
    </div>
  );
};

export default BlogPost;
