import Image from 'next/image';

import styles from './index.module.css';
import Header from '@/components/Header';
import FrontPageBlock from '@/components/FrontPageBlock';

import dynamic from 'next/dynamic';
import HowItWorksBlock from '@/components/HowItWorksBlock';
import StillQuestionsBlock from '@/components/StillQuestionsBlock';
import Footer from '@/components/Footer';
import Script from 'next/script';

const WhyBlock = dynamic(() => import('@/components/WhyBlock'), { ssr: false });
const TestimonialsBlock = dynamic(
  () => import('@/components/TestimonialsBlock'),
  { ssr: false }
);
const FAQBlock = dynamic(() => import('@/components/FAQBlock'), { ssr: false });

export default function Home() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q4122NBV14" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q4122NBV14');
        `}
      </Script>
      <div className={styles.headerContainer}>
        <div className={styles.defaultPadding}>
          <Header />
        </div>
        <div className={styles.defaultPadding}>
          <FrontPageBlock />
        </div>
      </div>
      <main>
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
        <div className={styles.defaultPadding}>
          <FAQBlock />
        </div>
        <div className={styles.questionsContainer}>
          <div className={styles.defaultPadding}>
            <StillQuestionsBlock />
          </div>
        </div>
      </main>
      <div className={styles.footer}>
        <div className={styles.defaultPadding}>
          <Footer />
        </div>
      </div>
    </>
  );
}
