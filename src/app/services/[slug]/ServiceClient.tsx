'use client';

import { ServiceDetail } from '@/data/services';
import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import CallAgentIPhone from '@/components/CallAgentIPhone';
import ChatAgentAnimation from '@/components/ChatAgentAnimation';
import SMSAgentAnimation from '@/components/SMSAgentAnimation';
import EmailAgentAnimation from '@/components/EmailAgentAnimation';
import SMSMarketingAnimation from '@/components/SMSMarketingAnimation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Check,
    ArrowRight,
    Zap,
    Shield,
    BarChart3,
    Users,
    Settings,
    Globe,
    Clock,
    MessageCircle,
    Star,
    Plus,
    Minus,
    ArrowUpRight,
    XCircle,
    CheckCircle2,
    Target
} from 'lucide-react';
import { useState } from 'react';
import styles from './ServiceDetail.module.css';

interface Props {
    service: ServiceDetail;
}

const animations: Record<string, any> = {
    CallAgentIPhone,
    ChatAgentAnimation,
    SMSAgentAnimation,
    EmailAgentAnimation,
    SMSMarketingAnimation,
};

const getAnimationScale = (slug: string) => {
    switch (slug) {
        case 'call-agent': return 0.75;
        case 'chat-agent': return 0.95;
        case 'sms-faq': return 1;
        case 'email-marketing': return 1;
        case 'sms-marketing': return 0.95;
        default: return 1;
    }
};

export default function ServiceClient({ service }: Props) {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const Animation = animations[service.animationComponent];
    const scale = getAnimationScale(service.slug);

    return (
        <main className={styles.page}>
            <AnimatedBackground />
            {/* 1. TOP NAVIGATION BAR */}
            <Navbar />

            {/* 2. HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div>
                            <div className={styles.heroTag}>{service.title} Specialist</div>
                            <h1 className={styles.heroTitle}>{service.title}</h1>
                            <p className={styles.heroSubtitle}>
                                {service.tagline}
                            </p>
                            <p style={{ color: '#4B5563', marginBottom: 32, lineHeight: 1.6 }}>
                                {service.description}
                            </p>
                            <div className={styles.heroChecklist}>
                                {service.whatItDoes.slice(0, 3).map((item, i) => (
                                    <div key={i} className={styles.checkItem}>
                                        <Check size={18} className={styles.checkIcon} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className={styles.heroBtn}>
                                Contact Us <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div className={styles.productCard}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                                <div style={{ fontWeight: 700 }}>Service Overview</div>
                                <div style={{ color: '#00C2D1', fontSize: '0.8rem', fontWeight: 700 }}>LIVE NOW</div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '20px 0' }}>
                                <div className={styles.animationWrapper}>
                                    {Animation ? (
                                        <motion.div
                                            initial={{ scale: scale * 0.9, opacity: 0 }}
                                            animate={{ scale: scale, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            style={{ transformOrigin: 'center center' }}
                                        >
                                            <Animation />
                                        </motion.div>
                                    ) : (
                                        <div style={{ fontSize: '3rem' }}>🚀</div>
                                    )}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>98% Response Rate</h3>
                                <p style={{ color: '#6B7280', marginTop: 8 }}>Automated {service.title} performance.</p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }}>
                                <div style={{ padding: 16, background: '#F9FAFB', borderRadius: 12 }}>
                                    <div style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600 }}>JOBS CREATED</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>1,284+</div>
                                </div>
                                <div style={{ padding: 16, background: '#F9FAFB', borderRadius: 12 }}>
                                    <div style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600 }}>AVG. RATING</div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>4.9/5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PRODUCT OVERVIEW / STATS SECTION */}
            <section className={styles.statsSection}>
                <div className={styles.container}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <div className={styles.featureIcon} style={{ marginBottom: 0 }}><MessageCircle size={20} /></div>
                            <div>
                                <div className={styles.statValue}>150k+</div>
                                <div className={styles.statLabel}>Interactions</div>
                            </div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.featureIcon} style={{ marginBottom: 0 }}><Globe size={20} /></div>
                            <div>
                                <div className={styles.statValue}>99.9%</div>
                                <div className={styles.statLabel}>Uptime</div>
                            </div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.featureIcon} style={{ marginBottom: 0 }}><Clock size={20} /></div>
                            <div>
                                <div className={styles.statValue}>&lt; 5s</div>
                                <div className={styles.statLabel}>Response</div>
                            </div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.featureIcon} style={{ marginBottom: 0 }}><Shield size={20} /></div>
                            <div>
                                <div className={styles.statValue}>SOC2</div>
                                <div className={styles.statLabel}>Secure</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CORE CAPABILITIES SECTION */}
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <div className={styles.capabilitiesGrid}>
                        <div className={styles.stickyHeader}>
                            <div className={styles.heroTag} style={{ marginBottom: 16 }}>Capabilities</div>
                            <h2 className={styles.sectionTitle}>What the <br />{service.title} Does.</h2>
                            <p style={{ color: '#6B7280', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                Precise automation built for the speed of home services.
                            </p>
                        </div>
                        <div className={styles.featureList}>
                            {service.whatItDoes.map((item, i) => (
                                <div key={i} className={styles.featureCard}>
                                    <div className={styles.featureIcon}><Zap size={20} /></div>
                                    <h3 className={styles.featureTitle}>{item}</h3>
                                    <p className={styles.featureDesc}>Autonomous processing and real-time data sync.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. BUILT SPECIFICALLY FOR SECTION */}
            <section className={styles.sectionPadding} style={{ background: '#F9FAFB' }}>
                <div className={styles.container}>
                    <div className={styles.transformGrid}>
                        <div>
                            <div className={styles.heroTag} style={{ marginBottom: 24 }}>Industry Expertise</div>
                            <h2 className={styles.sectionTitle}>{service.builtFor.title}</h2>
                            <p style={{ color: '#6B7280', margin: '24px 0 32px', fontSize: '1.1rem' }}>
                                The {service.title} is trained to handle real home service conversations and edge cases.
                            </p>
                            <div className={styles.heroChecklist}>
                                {service.builtFor.items.map((item, i) => (
                                    <div key={i} className={styles.checkItem}>
                                        <div style={{ width: 24, height: 24, background: '#00C2D1', borderRadius: '50%', display: 'grid', placeItems: 'center', color: 'white' }}>
                                            <Check size={14} />
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            {service.builtFor.footer && (
                                <p style={{ marginTop: 32, fontStyle: 'italic', color: '#6B7280' }}>
                                    {service.builtFor.footer}
                                </p>
                            )}
                        </div>
                        <div className={styles.resultCard} style={{ background: 'white' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 24 }}>Why Businesses Use It</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {service.whyUseIt.map((benefit, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                        <div style={{ color: '#00C2D1' }}><ArrowUpRight size={20} /></div>
                                        <span style={{ fontWeight: 600 }}>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/pricing" style={{ marginTop: 40, background: '#00C2D1', color: 'white', padding: '16px 24px', borderRadius: 12, textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>
                                Scale Your Business Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. MANUAl VS AI COMPARISON SECTION */}
            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <div className={styles.comparisonGrid}>
                        {/* MANUAL SIDE */}
                        <div className={styles.comparisonSide}>
                            <div className={styles.comparisonTag} style={{ color: '#ef4444' }}>{service.comparison.manual.label}</div>
                            <h2 className={styles.comparisonTitle} style={{ textDecoration: 'line-through', opacity: 0.5 }}>
                                {service.comparison.manual.title[0]} <br /> {service.comparison.manual.title[1]}
                            </h2>
                            <p className={styles.comparisonDesc}>
                                {service.comparison.manual.desc}
                            </p>
                            <div className={styles.comparisonList}>
                                {service.comparison.manual.items.map((item, i) => (
                                    <div key={i} className={styles.comparisonItem} style={{ justifyContent: 'flex-end', opacity: 0.6 }}>
                                        <span>{item}</span>
                                        <XCircle size={18} color="#ef4444" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DIVIDER */}
                        <div className={styles.comparisonDivider} />

                        {/* AI SIDE */}
                        <div className={styles.comparisonSide} style={{ textAlign: 'left' }}>
                            <div className={styles.comparisonTag} style={{ color: '#00C2D1' }}>{service.comparison.ai.label}</div>
                            <h2 className={styles.comparisonTitle}>
                                {service.comparison.ai.title[0]} <br /> <span style={{ color: '#00C2D1' }}>{service.comparison.ai.title[1]}</span>
                            </h2>
                            <p className={styles.comparisonDesc}>
                                {service.comparison.ai.desc}
                            </p>
                            <div className={styles.comparisonList} style={{ alignItems: 'flex-start' }}>
                                {service.comparison.ai.items.map((item, i) => (
                                    <div key={i} className={styles.comparisonItem}>
                                        <CheckCircle2 size={18} color="#00C2D1" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. HOW IT WORKS SECTION */}
            <section className={styles.sectionPadding}>
                <div className={styles.container}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: 80 }}
                    >
                        <h2 className={styles.sectionTitle} style={{ fontSize: '2.5rem', marginBottom: 16 }}>{service.flow.title}</h2>
                        <p style={{ color: '#6B7280', fontSize: '1rem' }}>Powered by AI, synced with Jobber.</p>
                    </motion.div>

                    <motion.div
                        className={styles.stepsGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        {service.flow.steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className={styles.stepCard}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                                    show: { opacity: 1, scale: 1, y: 0 }
                                }}
                            >
                                <div className={styles.stepIcon}>
                                    {i + 1}
                                    {/* ANIMATED PIPELINE CONNECTOR */}
                                    {i < service.flow.steps.length - 1 && (
                                        <motion.div
                                            className={styles.pipelineConnector}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: 'calc(100% + 24px)' }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                                        />
                                    )}
                                </div>
                                <p className={styles.stepContent}>{step}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {service.flow.footer && (
                        <motion.p
                            className={styles.stepFooter}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                        >
                            {service.flow.footer}
                        </motion.p>
                    )}
                </div>
            </section>



            {/* 10. FAQ SECTION */}
            <section className={styles.sectionPadding} style={{ background: '#F9FAFB' }}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: 64 }}>Frequently Asked Questions</h2>
                    <div className={styles.faqList}>
                        {service.faq.map((faq, i) => (
                            <div key={i} className={styles.faqItem}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    style={{ width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                    <span style={{ fontSize: '1.125rem', fontWeight: 700 }}>{faq.q}</span>
                                    {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                                </button>
                                {openFaq === i && (
                                    <p style={{ marginTop: 16, color: '#4B5563', lineHeight: 1.6 }}>{faq.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
