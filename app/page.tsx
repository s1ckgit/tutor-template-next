import styles from './page.module.css';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About-section/About';
import LessonRegister from '@/components/Lesson-register/Lesson-register';
import VideoSection from '@/components/Video-section/Video-section';
import CommentsSection from '@/components/Comments-section/Comments-section';
import FeaturesSection from '@/components/Features-section/Features-section';
import BlogSection from '@/components/Blog-section/Blog-section';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default async function Home() {
  
  return (
    <>
        <Header />
        <main className={styles.main}>
          <Hero />
          <About />
          <VideoSection />
          <CommentsSection />
          <FeaturesSection />
          <LessonRegister />
          <BlogSection />
        </main>
        < Footer />
    </>
  );
}
