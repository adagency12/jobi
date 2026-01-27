'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './HelpPage.module.css';

export default function HelpPage() {
    return (
        <main className={styles.page}>
            <Navbar />

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>How can we help you?</h1>
                    <div className={styles.searchBox}>
                        <div className={styles.searchIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                        <input type="text" className={styles.searchInput} placeholder="Search for articles, guides, or features..." />
                    </div>
                </div>
            </section>

            <div className={styles.container}>
                {/* CATEGORIES */}
                <section className={styles.categoriesSection}>
                    <h2 className={styles.sectionTitle}>Browse by Topic</h2>
                    <div className={styles.categoryGrid}>
                        <Link href="#" className={styles.categoryCard}>
                            <div className={styles.iconWrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <h3 className={styles.catTitle}>AI Agents Setup</h3>
                            <p className={styles.catDesc}>Guides on configuring your Call, Chat, and SMS receptionists.</p>
                        </Link>

                        <Link href="#" className={styles.categoryCard}>
                            <div className={styles.iconWrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </div>
                            <h3 className={styles.catTitle}>Customizing Scripts</h3>
                            <p className={styles.catDesc}>How to train your AI to speak like your best employee.</p>
                        </Link>

                        <Link href="#" className={styles.categoryCard}>
                            <div className={styles.iconWrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                            </div>
                            <h3 className={styles.catTitle}>Integrations</h3>
                            <p className={styles.catDesc}>Connecting JOBBEI with Jobber, Housecall Pro, and more.</p>
                        </Link>

                        <Link href="#" className={styles.categoryCard}>
                            <div className={styles.iconWrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                            </div>
                            <h3 className={styles.catTitle}>Billing & Subscription</h3>
                            <p className={styles.catDesc}>Manage your plan, payment methods, and invoices.</p>
                        </Link>

                        <Link href="#" className={styles.categoryCard}>
                            <div className={styles.iconWrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <h3 className={styles.catTitle}>Email & SMS Marketing</h3>
                            <p className={styles.catDesc}>Setting up automated campaigns and follow-ups.</p>
                        </Link>

                        <Link href="#" className={styles.categoryCard}>
                            <div className={styles.iconWrapper}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                            </div>
                            <h3 className={styles.catTitle}>Troubleshooting</h3>
                            <p className={styles.catDesc}>Common issues and how to resolve them quickly.</p>
                        </Link>
                    </div>

                    {/* FAQ */}
                    <div className={styles.faqSection}>
                        <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
                        <div className={styles.faqList}>
                            <div className={styles.faqItem}>
                                <div className={styles.faqQuestion}>How quickly does the AI answer calls?</div>
                                <div className={styles.faqAnswer}>The AI answers instantly, 24/7. There is no waiting time for your customers, ensuring you never miss a lead.</div>
                            </div>
                            <div className={styles.faqItem}>
                                <div className={styles.faqQuestion}>Does it integrate with my calendar?</div>
                                <div className={styles.faqAnswer}>Yes, JOBBEI integrates with Google Calendar, Outlook, and major CRM calendars to book appointments directly into your schedule.</div>
                            </div>
                            <div className={styles.faqItem}>
                                <div className={styles.faqQuestion}>Can I change the AI's voice?</div>
                                <div className={styles.faqAnswer}>Absolutely. We offer a library of professional voices, or we can clone a specific voice for your brand (Enterprise plan).</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
