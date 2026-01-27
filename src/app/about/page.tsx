'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import styles from './AboutPage.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check,
    ArrowRight,
    Shield,
    Zap,
    Target,
    Users,
    Settings,
    MessageSquare,
    PhoneCall,
    Mail,
    TrendingUp,
    ShieldCheck,
    Database,
    CheckCircle2,
    Star,
    Users2,
    Rocket,
    Layout,
    Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AboutPage() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        { icon: <PhoneCall size={32} />, label: 'Inquiry Received', color: '#00C2D1' },
        { icon: <Zap size={32} />, label: 'JOBBEI AI Action', color: '#F59E0B' },
        { icon: <Database size={32} />, label: 'Synced to Jobber', color: '#8B5CF6' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <main className={styles.page}>
            <AnimatedBackground />
            <Navbar />

            {/* 1. HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.badge}>About JOBBEI AI</div>
                        <h1 className={styles.heroTitle}>
                            We Make Life Easy for <br /> <span>Home Service Owners.</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            JOBBEI AI was built to give owners their time back. We handle the front-office chaos so you can focus on the work that actually grows your business.
                        </p>
                        <div className={styles.heroChecklist}>
                            <div className={styles.checkItem}><PhoneCall size={18} className={styles.checkIcon} /> Fast Answer</div>
                            <div className={styles.checkItem}><MessageSquare size={18} className={styles.checkIcon} /> Auto Chat</div>
                            <div className={styles.checkItem}><Mail size={18} className={styles.checkIcon} /> Text Back</div>
                            <div className={styles.checkItem}><Link href="/services" style={{ color: 'inherit', textDecoration: 'none' }}><Zap size={18} className={styles.checkIcon} /> Jobber Sync</Link></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE PROBLEM SECTION */}
            <section className={`${styles.problemSection} ${styles.sectionPadding}`}>
                <div className={styles.container}>
                    <div className={styles.problemGrid}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.sectionLabel}>The Owner's Struggle</div>
                            <h2 className={styles.sectionTitle}>Stop Living on <br /> the Phone</h2>
                            <div className={styles.problemText}>
                                <p><strong>Constant interruptions are the hidden cost of growth.</strong> Every missed call is a missed opportunity, but answering every call personally is impossible when you're on a job site.</p>
                                <p style={{ marginTop: 24 }}>JOBBEI ends the "phone tag" nightmare. By automating your front office, we ensure your business stays responsive while you stay focused on delivering quality service.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className={styles.graphicBox}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.animationContainer}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStep}
                                        className={`${styles.stepWrapper} ${styles.activeStep}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className={styles.stepIconBox}>
                                            {steps[activeStep].icon}
                                        </div>
                                        <div className={styles.stepLabel}>
                                            {steps[activeStep].label}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                <div className={styles.progressDots}>
                                    {steps.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`${styles.dot} ${activeStep === i ? styles.activeDot : ''}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div style={{ position: 'absolute', bottom: 40, left: 40, background: '#0B0E14', padding: '12px 20px', borderRadius: 12, border: '1px solid #00C2D1', color: '#00C2D1', fontWeight: 700, zIndex: 10 }}>
                                +18% Revenue
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW: OUR MISSION SECTION */}
            <section className={styles.missionSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.missionContent}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.sectionLabel}>Our Mission</div>
                        <h2 className={styles.missionText}>
                            Help home service businesses grow <span>without hiring more office staff.</span>
                        </h2>
                        <p className={styles.missionSubtext}>
                            By using AI to handle calls, chats, texts, and follow-ups, JOBBEI allows owners and crews
                            to focus on delivering quality work while the system handles communication and organization.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. PRECISION ENGINEERING SECTION */}
            <section className={styles.engineeringSection}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', marginBottom: 80 }}>
                        <div className={styles.sectionLabel}>Our Architecture</div>
                        <h2 className={styles.sectionTitle}>Built on Precision Engineering</h2>
                        <p style={{ color: '#9CA3AF', maxWidth: '600px', margin: '0 auto' }}>
                            We don't build generic bots. We build trade-specific AI agents trained on real home service workflows.
                        </p>
                    </div>

                    <div className={styles.cardGrid}>
                        {[
                            {
                                icon: <PhoneCall />,
                                title: 'Answering Every Call',
                                desc: 'A human-like AI voice that answers, qualifies, and schedules leads into your CRM instantly.'
                            },
                            {
                                icon: <Target />,
                                title: 'Knows Your Trades',
                                desc: 'Whether it\'s HVAC, Lawn Care, or Roofing, JOBBEI knows the right questions to ask for every service type.'
                            },
                            {
                                icon: <Shield />,
                                title: 'Always On the Job',
                                desc: 'Reliable, SOC2-compliant automation that never sleeps, never takes a break, and never misses a detail.'
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                className={styles.featureCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className={styles.cardIcon}>{card.icon}</div>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDesc}>{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. JARGON-FREE SECTION (WHITE) */}
            <section className={styles.whiteSection}>
                <div className={styles.container}>
                    <div className={styles.jargonGrid}>
                        <div>
                            <h2 className={styles.sectionTitle} style={{ fontSize: '3.5rem' }}>Focusing on Jobs, <br /> <span style={{ color: '#9CA3AF' }}>Not Jargon.</span></h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: '#4B5563', marginBottom: 40 }}>
                                We build automation that works, period. JOBBEI handles the tech complexity so you can focus on your skill.
                            </p>
                            <Link href="/contact" style={{ fontWeight: 800, color: '#0B0E14', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                                VIEW OUR CASE STUDIES <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div className={styles.jargonStats}>
                            <motion.div className={styles.statCard} whileHover={{ y: -5 }}>
                                <div className={styles.statIcon}><TrendingUp size={20} /></div>
                                <div className={styles.statTag}>REVENUE IMPACT</div>
                                <div className={styles.statTitle}>+32% More</div>
                                <p className={styles.statDesc}>Average growth after 6 months.</p>
                            </motion.div>
                            <motion.div className={styles.statCard} whileHover={{ y: -5 }}>
                                <div className={styles.statIcon} style={{ color: '#F59E0B' }}><Users size={20} /></div>
                                <div className={styles.statTag}>CLIENT SAT</div>
                                <div className={styles.statTitle}>100% Happy</div>
                                <p className={styles.statDesc}>Zero missed appointments.</p>
                            </motion.div>
                            <motion.div className={`${styles.statCard} ${styles.statCardDark}`} whileHover={{ y: -5 }}>
                                <div className={styles.statIcon} style={{ color: '#00C2D1' }}><ShieldCheck size={20} /></div>
                                <div className={styles.statTag}>LIVE COVERAGE</div>
                                <div className={styles.statTitle}>Always On</div>
                                <p className={styles.statDesc} style={{ color: 'rgba(255,255,255,0.6)' }}>24/7/365 reliability.</p>
                            </motion.div>
                            <motion.div className={styles.statCard} whileHover={{ y: -5 }}>
                                <div className={styles.statIcon} style={{ color: '#8B5CF6' }}><Zap size={20} /></div>
                                <div className={styles.statTag}>RESPONSE TIME</div>
                                <div className={styles.statTitle}>Instant</div>
                                <p className={styles.statDesc}>Under 2 second replies.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* NEW: WHO JOBBEI IS FOR SECTION */}
            <section className={styles.audienceSection}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center' }}>
                        <div className={styles.sectionLabel}>Target Users</div>
                        <h2 className={styles.sectionTitle}>Who JOBBEI Is For</h2>
                        <p style={{ color: '#6B7280' }}>If your business depends on customer inquiries to book work, JOBBEI was built for you.</p>
                    </div>

                    <div className={styles.audienceGrid}>
                        {[
                            { icon: <Star />, title: 'Business Freedom', desc: 'Step away from the phone and lead your crew without constant administrative interruptions.' },
                            { icon: <Users2 />, title: 'Effortless Scaling', desc: 'Grow your volume without the headache of hiring and training more office staff.' },
                            { icon: <CheckCircle2 />, title: 'Professional Peace of Mind', desc: 'Rest easy knowing every customer receives an instant, elite response—even at midnight.' },
                            { icon: <Layout />, title: 'Jobber Integration', desc: 'Your schedule fills up automatically. JOBBEI handles the legwork and syncs directly to Jobber.' },
                            { icon: <Rocket />, title: 'Simple Setup', desc: 'No tech-speak required. We train the AI for your specific trade so it works from day one.' },
                            { icon: <Sparkles />, title: 'Consistent Excellence', desc: 'Deliver a high-end brand experience that makes you stand out from the competition.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className={styles.audienceCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className={styles.audienceIcon}>{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: OUR VISION SECTION */}
            <section className={styles.visionBanner}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.visionContent}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.sectionLabel} style={{ color: '#00C2D1' }}>Our Vision</div>
                        <h2 className={styles.visionTitle}>The Operating System for <br /> Home Service Automation.</h2>
                        <p className={styles.visionText}>
                            We’re building JOBBEI to become the operating system for home service automation —
                            reliable, intelligent, and always working. As AI continues to evolve, JOBBEI evolves with it,
                            staying focused on practical automation that delivers real business results.
                        </p>
                    </motion.div>
                </div>
            </section>


            <Footer />
        </main>
    );
}
