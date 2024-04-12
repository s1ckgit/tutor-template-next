'use client';

import cn from 'classnames';
import { useRouter } from 'next/navigation';

import { type PostData } from "@/actions/posts";

import BlogPost from "../Blog-post/Blog-post";

import styles from './Blog-posts.module.css';
import { useState } from "react";

interface BlogPostsProps {
  data: PostData[]
}

const BlogPosts = ({
  data
}: BlogPostsProps) => {
  const router = useRouter();
  const buttonsCount = Math.ceil(data.length / 3);
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <div className={styles.posts} id='posts'>
        {data.map((item, i) => {
          if (i <= (page * 3) - 1 && i >= (page * 3) - 3) {
            return <BlogPost key={item._id.toString()} text={item.text} title={item.title} createdAt={item.createdAt}/>;
          }
        })}
      </div>
      <div className={styles.buttons}>
        {buttonsCount > 1 && [...Array(buttonsCount)].map((button, i) => (
          <button onClick={() => {
            setPage(i + 1);
            router.push('#posts');
          }} className={cn(styles.button, {
            [styles.active] : page === i + 1
          })} key={i}>{i + 1}</button>
        ))}
      </div>
    </>

  );
};
export default BlogPosts;
