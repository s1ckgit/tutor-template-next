'use client';
import { useRef } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import styles from './Header.module.css';
import VKLOGO from '@/public/social/VK.svg';


const Header = (): JSX.Element => {
  const menuElement = useRef<HTMLDivElement>(null);

  function hideMenu() {
    menuElement?.current?.classList.add(styles.hidden);
  }

  function showMenu() {
    menuElement?.current?.classList.remove(styles.hidden);
  }

  return (
    <header className={cn(styles.main)}>
      <div className={cn('container', styles.container)}>
        <h2 className={styles.logo}>logo title</h2>
        <div onClick={showMenu} className={styles.hamburger} />
        <div ref={menuElement} className={cn(styles.menu, styles.hidden)}>
          <span onClick={hideMenu} className={styles.close}></span>
          <nav className={styles.hamburgerNavigation}>
            <Link className={styles.link} href='#about'>Обо мне</Link>
            <Link className={styles.link} href='#reviews'>Отзывы</Link>
            <Link className={styles.link} href='#last-news'>Блог</Link>
          </nav>
          <div className={styles.hamburgerSocials}>
            <Link href='' target='_blank' className={styles.social}>
              <VKLOGO />
            </Link>
          </div>
        </div>
        <nav className={styles.navigation}>
          <Link className={styles.link} href='#about'>Обо мне</Link>
          <Link className={styles.link} href='#reviews'>Отзывы</Link>
          <Link className={styles.link} href='#last-news'>Блог</Link>
        </nav>
        <div className={styles.socials}>
          <Link href='' target='_blank' className={styles.social}>
            <VKLOGO className={styles.vklogo}/>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
