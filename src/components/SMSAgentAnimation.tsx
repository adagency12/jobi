'use client';
import { useState, useEffect } from 'react';
import styles from './SMSAgentAnimation.module.css';

export default function SMSAgentAnimation() {
    const [stage, setStage] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setStage((prev) => (prev === 4 ? 1 : prev + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.canvas}>
            <div className={styles.smsHeader}>
                <span>Text Message</span>
                <span>Just Now</span>
            </div>

            {/* STAGE 1: CUSTOMER ASKS */}
            <div className={`${styles.bubble} ${styles.customer} ${stage >= 1 ? styles.bubbleActive : ''}`}>
                📲 What are your rates?
            </div>

            {/* STAGE 2: JOBBEI RESPONDS */}
            <div className={`${styles.bubble} ${styles.jobbei} ${stage >= 2 ? styles.bubbleActive : ''}`} style={{ transitionDelay: '0.8s' }}>
                🤖 Our gutter cleaning starts at $199. Would you like an estimate?
            </div>

            {/* STAGE 3: SYNC NOTIFICATION */}
            <div className={`${styles.notification} ${stage >= 3 ? styles.notifActive : ''}`}>
                <div className={styles.notifIcon}>J</div>
                <div className={styles.notifText}>
                    <div className={styles.notifTitle}>JOBBEI Sync</div>
                    <div className={styles.notifDesc}>New SMS lead pinned to Jobber CRM</div>
                </div>
                <div style={{ color: '#4CD964', fontWeight: 900 }}>✓</div>
            </div>

            {/* STAGE 4: STATUS UPDATE */}
            {stage === 4 && (
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: 10 }}>
                    Lead captured and synced automatically...
                </div>
            )}
        </div>
    );
}
