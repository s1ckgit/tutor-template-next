import Link from "next/link";

import VKLOGO from '@/public/social/VK.svg';
import WALOGO from '@/public/social/WA.svg';
import TGLOGO from '@/public/social/TG.svg';

import styles from './Contacts.module.css';


const Contacts = () => {
  return (
    <div className={styles.socials}>
      <Link href='https://vk.com' target='_blank'>
        <VKLOGO  className={styles.social} fill='#4C75A3'/>
      </Link>
      <Link href='https://www.whatsapp.com/' target='_blank'>
        <WALOGO className={styles.social} />
      </Link>
      <Link href='https://telegram.org' target='_blank'>
        <TGLOGO className={styles.social} />
      </Link>
    </div>
  );
};
export default Contacts;
