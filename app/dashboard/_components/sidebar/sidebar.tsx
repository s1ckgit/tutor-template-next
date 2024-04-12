'use client';
import Link from "next/link";
import styles from './sidebar.module.css';
import { useIsClient } from "usehooks-ts";

const Sidebar = () => {
  const isClient = useIsClient();
  const height = isClient ? window.innerHeight - 32 : 0;

  return (
    <div className={styles.sidebar}>
      {isClient && <ul className={styles.ul} style={{
        height: height
      }}>
        <li className={styles.li}>
          <Link className={styles.link} href='/dashboard/posts'>Посты</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href='/dashboard/lessons'>Уроки</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href='/dashboard/comments'>Отзывы</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.home} href='/'>На главную</Link>
        </li>
      </ul>}
    </div>
  );
};
export default Sidebar;
