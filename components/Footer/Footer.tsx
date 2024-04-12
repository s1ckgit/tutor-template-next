import Link from 'next/link';
import cn from 'classnames';

import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
        <div className={cn('container', styles.container)}>
            <div className={styles.info}>
              <p className={styles.copyright}>© {year} </p>
            </div>
            <Link className={styles.dashboard} href='/dashboard'>Dashboard</Link>
        </div>
    </footer>
  );
};

export default Footer;
