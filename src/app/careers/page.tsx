'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import Link from 'next/link';
import styles from './CareersPage.module.css';

export default function CareersPage() {
    return (
        <main className={styles.page}>
            <Navbar />

            {/* HERO */}
            <section className={styles.hero}>
                <AnimatedBackground mode="container" />
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Join the AI Revolution <br /> <span>at JOBBEI AI</span></h1>
                    <p className={styles.heroSubtitle}>
                        We're building the future of home service automation. Join our team of dreamers, doers, and innovators shaping how local businesses grow.
                    </p>
                    <Link href="#positions" className={styles.heroBtn}>
                        View Open Positions
                    </Link>
                </div>
            </section>

            {/* VALUES */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Why Work With Us?</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                            </div>
                            <h3 className={styles.valueTitle}>Impact First</h3>
                            <p className={styles.valueDesc}>
                                Your work directly helps thousands of small business owners reclaim their time and grow their livelihoods.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                            </div>
                            <h3 className={styles.valueTitle}>Innovation at Core</h3>
                            <p className={styles.valueDesc}>
                                We're pushing the boundaries of Voice AI and automation. We don't just follow trends; we set them.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <h3 className={styles.valueTitle}>People Focused</h3>
                            <p className={styles.valueDesc}>
                                We value our team as much as our customers. Flexible work, great benefits, and a culture of respect.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OPEN POSITIONS */}
            <section id="positions" className={styles.positionsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Open Positions</h2>
                    <div className={styles.positionsList}>
                        <Link href="#" className={styles.positionCard}>
                            <div>
                                <h3 className={styles.posTitle}>Senior Full Stack Engineer</h3>
                                <div className={styles.posMeta}>
                                    <span className={styles.posTag}>Engineering</span>
                                    <span className={styles.posTag}>Remote</span>
                                    <span className={styles.posTag}>Full Time</span>
                                </div>
                            </div>
                            <span className={styles.applyBtn}>Apply Now</span>
                        </Link>
                        <Link href="#" className={styles.positionCard}>
                            <div>
                                <h3 className={styles.posTitle}>AI/ML Research Scientist</h3>
                                <div className={styles.posMeta}>
                                    <span className={styles.posTag}>AI Research</span>
                                    <span className={styles.posTag}>New York, NY</span>
                                    <span className={styles.posTag}>Full Time</span>
                                </div>
                            </div>
                            <span className={styles.applyBtn}>Apply Now</span>
                        </Link>
                        <Link href="#" className={styles.positionCard}>
                            <div>
                                <h3 className={styles.posTitle}>Product Designer</h3>
                                <div className={styles.posMeta}>
                                    <span className={styles.posTag}>Design</span>
                                    <span className={styles.posTag}>Remote</span>
                                    <span className={styles.posTag}>Full Time</span>
                                </div>
                            </div>
                            <span className={styles.applyBtn}>Apply Now</span>
                        </Link>
                        <Link href="#" className={styles.positionCard}>
                            <div>
                                <h3 className={styles.posTitle}>Customer Success Manager</h3>
                                <div className={styles.posMeta}>
                                    <span className={styles.posTag}>Operations</span>
                                    <span className={styles.posTag}>Chicago, IL</span>
                                    <span className={styles.posTag}>Full Time</span>
                                </div>
                            </div>
                            <span className={styles.applyBtn}>Apply Now</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
