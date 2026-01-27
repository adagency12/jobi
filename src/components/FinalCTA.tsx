import styles from './FinalCTA.module.css';

export default function FinalCTA() {
    return (
        <div className={styles.content}>
            <h2 className={styles.title}>Scale Your Business Without More Staff</h2>
            <p className={styles.description}>
                Join 100+ home service pros who have automated their receptionist, CRM,
                and follow-ups to reclaim their time.
            </p>
            <div className={styles.ctaGroup}>
                <button className="btn btn-primary">Get Started Free</button>
                <button className="btn btn-secondary">Learn More</button>
            </div>
        </div>
    );
}
