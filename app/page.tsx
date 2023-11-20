import Image from 'next/image';

import styles from './index.module.css';
import Header from '@/components/Header';
import FrontPageBlock from '@/components/FrontPageBlock';

import dynamic from 'next/dynamic';
import HowItWorksBlock from '@/components/HowItWorksBlock';

const WhyBlock = dynamic(() => import('@/components/WhyBlock'), { ssr: false });
const TestimonialsBlock = dynamic(
  () => import('@/components/TestimonialsBlock'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.defaultPadding}>
          <Header />
        </div>
        <div className={styles.defaultPadding}>
          <FrontPageBlock />
        </div>
      </div>
      <div className={styles.whyContainer}>
        <div className={styles.defaultPadding}>
          <WhyBlock />
        </div>
      </div>
      <div className={styles.defaultPadding}>
        <HowItWorksBlock />
      </div>
      <div className={styles.testimonialsContainer}>
        <div className={styles.defaultPadding}>
          <TestimonialsBlock />
        </div>
      </div>
    </>
  );
}
