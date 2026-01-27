'use client';

import { motion } from 'framer-motion';
import styles from './MoreJobsLessStress.module.css';

const Icons = {
    Check: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}><polyline points="20 6 9 17 4 12" /></svg>,
    Message: () => <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
    Mail: () => <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
    Calendar: () => <svg className={styles.svgIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
};

const cards = [
    {
        title: 'Job Booked',
        sub: 'Via Automatic Texting',
        icon: Icons.Message,
        style: styles.iconGold
    },
    {
        title: 'Email Replied',
        sub: 'Customer follow-up sent',
        icon: Icons.Mail,
        style: styles.iconWhite
    },
    {
        title: 'Appointment Set',
        sub: 'Added to your CRM',
        icon: Icons.Calendar,
        style: styles.iconMaroon
    }
];

export default function MoreJobsLessStress() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* LEFT CONTENT */}
                <div className={styles.content}>
                    <h2 className={styles.headline}>
                        More Jobs.
                        <span className={styles.headlineHighlight}>Less Stress.</span>
                    </h2>
                    <p className={styles.description}>
                        JOBBEI is built for home service businesses that want professional help without the cost of hiring more staff. We handle the busywork so you can focus on the job.
                    </p>

                    <div className={styles.featureList}>
                        <div className={styles.featureItem}>
                            <Icons.Check />
                            <div>
                                <div className={styles.featureTitle}>Close Every Opportunity</div>
                                <div className={styles.featureDesc}>Never let a lead go cold. Our AI responds in seconds, moving every prospect closer to a sale.</div>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <Icons.Check />
                            <div>
                                <div className={styles.featureTitle}>Delete Your Busywork</div>
                                <div className={styles.featureDesc}>Free your team from repetitive follow-ups, boring scheduling, and manual data entry.</div>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <Icons.Check />
                            <div>
                                <div className={styles.featureTitle}>Always Professional</div>
                                <div className={styles.featureDesc}>Your AI agents work 24/7/365 with perfect energy, ensuring world-class service every single time.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT CARDS */}
                <div className={styles.cardStack}>
                    {cards.map((card, idx) => (
                        <motion.div
                            key={card.title}
                            className={styles.notifyCard}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: idx * 0.2,
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                            animate={{
                                y: [0, -10, 0]
                            }}
                            // @ts-ignore -- ignore framer motion types for simple array animation
                            transition={{
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: idx * 0.5
                                }
                            }}
                        >
                            <div className={`${styles.iconBox} ${card.style}`}>
                                <card.icon />
                            </div>
                            <div className={styles.cardText}>
                                <div className={styles.cardTitle}>{card.title}</div>
                                <div className={styles.cardSub}>{card.sub}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

