import styles from './WhyJOBBEI.module.css';

const stats = [
    {
        number: '0',
        label: 'Missed Calls',
        description: 'AI answers every time',
    },
    {
        number: '24/7',
        label: 'AI Receptionist',
        description: 'Always available',
    },
    {
        number: '100%',
        label: 'Jobber Sync',
        description: 'Auto-syncs every lead',
    },
    {
        number: '100%',
        label: 'Instant Follow-Ups',
        description: 'Automated responses',
    },
    {
        number: '+40%',
        label: 'More Booked Jobs',
        description: 'Convert more leads',
    },
];

export default function WhyJOBBEI() {
    return (
        <section className={styles.whyJOBBEI}>
            <div className={styles.container}>
                <h2 className={styles.title}>The Authorized Jobber Synergy</h2>
                <div className={styles.grid}>
                    {stats.map((stat) => (
                        <div key={stat.label} className={styles.stat}>
                            <div className={styles.statNumber}>{stat.number}</div>
                            <h3 className={styles.statLabel}>{stat.label}</h3>
                            <p className={styles.statDescription}>{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
