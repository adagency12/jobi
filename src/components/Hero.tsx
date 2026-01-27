'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const words = [
  "Automation",
  "Jobber Integration",
  "Optimization",
  "Innovation",
  "Intelligence"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badge}>
          ⚡ Trusted by 100+ Home Service Businesses
        </div>

        <div className={styles.headlineWrapper}>
          <h1 className={styles.headline}>
            <span className={styles.line1}>
              AI
              <div className={styles.dynamicWord}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={styles.highlight}
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
              for
            </span>
            <span className={styles.line2}>
              Home Service Businesses
            </span>
          </h1>
        </div>



        <p className={styles.subheadline}>
          JOBBEI is the <strong>ultimate Jobber sidekick</strong> that <strong>handles calls, texts, and lead capture</strong>.
          Built for window cleaning, pressure washing, and more, JOBBEI <strong>captures every lead</strong> and <strong>Enter leads into Jobber with AI</strong> — so <strong>no job is ever missed</strong>.
        </p>


        <div className={styles.ctaGroup}>
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
