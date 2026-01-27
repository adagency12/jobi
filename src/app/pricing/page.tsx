import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import Link from 'next/link';
import styles from './PricingPage.module.css';

// Custom Icons for Tiers
const TierIcons = {
    Starter: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    Team: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
    Business: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 16v0" /><path d="M9 16v0" /><path d="M13 16v0" /><path d="M17 16v0" /><path d="M21 16v0" /><path d="M5 21v-3" /><path d="M9 21v-3" /><path d="M13 21v-3" /><path d="M17 21v-3" /><path d="M21 21v-3" /><path d="M2 10l2 2 4-2 4 2 4-2 4 2 2-2-4-7-4 7-4-7-4 7-4-7z" /></svg>,
    Enterprise: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M17 7v14" /><path d="M9 17v4" /><path d="M9 11h8" /><path d="M9 7h8" /></svg>
};

const tiers = [
    {
        name: 'JOBBEI Core',
        audience: 'Small home service businesses starting with AI automation',
        price: '249',
        setupFee: '400',
        individualMonthly: '288',
        individualSetup: '550',
        saveBadge: 'Save $150 setup + $39/mo',
        icon: <TierIcons.Starter />,
        description: 'Essential AI automation to capture and respond to leads.',
        features: [
            'Website Chat Agent',
            'SMS FAQ Agent',
            'Instant website & SMS responses',
            'Service-specific qualification',
            'CRM lead & message logging',
            'Jobber lead sync'
        ],
        buttonText: 'Get Started',
        popular: false
    },
    {
        name: 'JOBBEI Flow',
        audience: 'Businesses missing calls, after-hours leads, or high inquiry volume',
        price: '449',
        setupFee: '750',
        individualMonthly: '587',
        individualSetup: '1,050',
        saveBadge: 'Save $300 setup + $138/mo',
        icon: <TierIcons.Team />,
        description: 'Intelligent call handling with complete lead flow automation.',
        features: [
            'AI Call Agent',
            'Website Chat Agent',
            'SMS FAQ Agent',
            '24/7 AI call answering',
            'Human-like natural voice',
            'Service qualification',
            'CRM logging (calls, chat & SMS)',
            'Jobber lead sync',
            'Automated SMS follow-ups'
        ],
        buttonText: 'Get Started',
        popular: true,
        popularLabel: 'Most Popular'
    },
    {
        name: 'JOBBEI Prime',
        audience: 'Busy teams that rely on estimates, follow-ups, and repeat jobs',
        price: '549',
        setupFee: '900',
        individualMonthly: '736',
        individualSetup: '1,350',
        saveBadge: 'Save $450 setup + $187/mo',
        icon: <TierIcons.Business />,
        description: 'Advanced automation with follow-ups and customer re-engagement.',
        features: [
            'AI Call Agent',
            'Website Chat Agent',
            'SMS FAQ Agent',
            'Email Marketing Automation',
            '24/7 AI call answering',
            'CRM logging (calls, chat, SMS & email)',
            'Jobber lead sync',
            'Automated SMS follow-ups',
            'AI email follow-ups & seasonal campaigns'
        ],
        buttonText: 'Get Started',
        popular: false
    },
    {
        name: 'JOBBEI Apex',
        audience: 'Growing home service businesses wanting full automation',
        price: '649',
        setupFee: '1,100',
        individualMonthly: '935',
        individualSetup: '1,650',
        saveBadge: 'Save $550 setup + $286/mo',
        icon: <TierIcons.Enterprise />,
        description: 'Complete AI-powered front-office replacement.',
        features: [
            'All 5 AI Agents Included',
            '24/7 AI call answering',
            'Human-like natural voice',
            'Service qualification',
            'CRM logging (all channels)',
            'Native Jobber Data Sync',
            'Automated SMS follow-ups',
            'AI email & SMS campaigns',
            'Seasonal promotions & rebooking'
        ],
        buttonText: 'Get Started',
        popular: true,
        popularLabel: 'Best Value'
    }
];


const individualServices = [
    {
        name: 'JOBBEI AI Call Agent',
        price: '299',
        setupFee: '500',
        icon: '📞',
        description: 'Best for: Businesses needing 24/7 coverage',
        features: ['24/7 AI call answering', 'Human-like voice', 'Service qualification', 'CRM logging', 'Jobber lead sync', 'Automated SMS follow-up']
    },
    {
        name: 'JOBBEI Website Chat Agent',
        price: '139',
        setupFee: '250',
        icon: '💬',
        description: 'Best for: Businesses with website traffic',
        features: ['Instant website chat', 'Lead qualification', 'Service-specific questions', 'CRM capture', 'Jobber sync']
    },
    {
        name: 'JOBBEI SMS FAQ Agent',
        price: '149',
        setupFee: '300',
        icon: '📱',
        description: 'Best for: Businesses receiving customer texts',
        features: ['Instant SMS replies', 'Service & pricing FAQs', 'Human-style texting', 'CRM logging', 'Jobber sync']
    },
    {
        name: 'JOBBEI Email Marketing',
        price: '149',
        setupFee: '300',
        icon: '📧',
        description: 'Best for: Repeat jobs & customer reactivation',
        features: ['AI-written emails', 'Estimate follow-ups', 'Seasonal campaigns', 'CRM & Jobber data usage', 'Performance tracking']
    },
    {
        name: 'JOBBEI SMS Marketing',
        price: '199',
        setupFee: '300',
        icon: '🚀',
        description: 'Best for: Fast rebooking & seasonal offers',
        features: ['Automated SMS campaigns', 'Personalized messaging', 'Seasonal promotions', 'Opt-out compliance', 'CRM & Jobber data sync']
    }
];


export default function PricingPage() {
    return (
        <main className={styles.page}>
            <AnimatedBackground />
            <Navbar />

            {/* HEADER */}
            <section className={styles.header + ' ' + styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Choose Your <span>JOBBEI</span></h1>
                    <p className={styles.subtitle}>
                        No hidden fees. No long-term contracts. Just world-class AI automation built for the home service industry.
                    </p>
                </div>
            </section>

            {/* PRICING GRID */}
            <section className={styles.section} style={{ paddingTop: 0, paddingBottom: 40 }}>
                <div className={styles.container}>
                    <div className={styles.pricingGrid}>
                        {tiers.map((tier) => (
                            <div key={tier.name} className={`${styles.tierCard} ${tier.popular ? styles.popular : ''}`}>
                                {tier.popular && (
                                    <div className={styles.bestValueBadge} style={{ background: tier.popularLabel === 'Best Value' ? 'var(--primary)' : '#4F46E5', width: 'auto' }}>
                                        {tier.popularLabel === 'Best Value' ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                        )}
                                        {tier.popularLabel}
                                    </div>
                                )}

                                <div className={styles.cardHeader}>
                                    <div className={styles.iconBox}>{tier.icon}</div>
                                    <div className={styles.headerText}>
                                        <h3 className={styles.tierName}>{tier.name}</h3>
                                    </div>
                                </div>

                                <p className={styles.tierMethod}>{tier.description}</p>

                                <div className={styles.pricingSection}>
                                    <div className={styles.priceRow}>
                                        <span className={styles.currency}>$</span>
                                        <span className={styles.amount}>{tier.price}</span>
                                        <span className={styles.period}>/month</span>
                                    </div>

                                    <div className={styles.setupFee} style={{ marginTop: '12px' }}>
                                        One-Time Setup: ${tier.setupFee} <span className={styles.struckPrice}>${tier.individualSetup}</span>
                                    </div>
                                </div>

                                <div className={styles.divider}></div>

                                <div className={styles.featureTitle}>WHAT'S INCLUDED</div>
                                <div className={styles.featureList}>
                                    {tier.features.map(feature => (
                                        <div key={feature} className={styles.featureItem}>
                                            <span className={styles.check}>✓</span>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.ctaWrapper}>
                                    <Link href="/contact" className={`${styles.cta} ${tier.popular ? styles.ctaPrimary : styles.ctaSecondary}`}>
                                        {tier.buttonText} <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INDIVIDUAL SERVICES */}
            <section className={styles.section} style={{ paddingTop: 40, paddingBottom: 40 }}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Build Your Own Team</h2>
                        <p className={styles.sectionSubtitle}>Start with individual specialists and scale as you grow.</p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {individualServices.map((service) => (
                            <div key={service.name} className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>{service.icon}</div>
                                <h3 className={styles.serviceName}>{service.name}</h3>
                                <div className={styles.servicePrice}>
                                    <span className={styles.sCurrency}>$</span>
                                    {service.price}
                                    <span className={styles.sPeriod}>/mo</span>
                                </div>
                                <div className={styles.setupFee}>
                                    + ${service.setupFee} One-Time Setup
                                </div>
                                <div className={styles.divider} style={{ margin: '16px 0' }}></div>
                                <p className={styles.serviceDesc}>{service.description}</p>
                                <ul className={styles.sFeatureList}>
                                    {service.features.map(f => (
                                        <li key={f}>• {f}</li>
                                    ))}
                                </ul>
                                <Link href="/contact" className={styles.serviceBtn}><span>Select</span></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
