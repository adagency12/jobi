'use client';
import { useState, useEffect } from 'react';
import styles from './CallAgentAnimation.module.css';

export default function CallAgentAnimation() {
    const [stage, setStage] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setStage((prev) => (prev === 8 ? 1 : prev + 1));
        }, 1500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.canvas}>

            {/* 1. CUSTOMER INQUIRY */}
            <div className={`${styles.stage} ${stage === 1 ? styles.stageActive : ''}`}>
                <div className={`${styles.node} ${styles.floating}`}>📞</div>
                <div className={styles.label}>Customer Inquiry</div>
            </div>

            {/* 2. AI RESPONDS */}
            <div className={`${styles.stage} ${stage === 2 ? styles.stageActive : ''}`}>
                <div className={styles.waveform}>
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className={styles.bar} style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                </div>
                <div className={styles.label}>AI Responding Automatically</div>
            </div>

            {/* 3. CONVERSATION */}
            <div className={`${styles.stage} ${stage === 3 ? styles.stageActive : ''}`}>
                <div className={styles.chatStack}>
                    <div className={styles.bubble}>&quot;What service do you need?&quot;</div>
                    <div className={styles.bubble} style={{ animationDelay: '0.4s' }}>&quot;What&apos;s your address?&quot;</div>
                </div>
            </div>

            {/* 4. LEAD CAPTURED */}
            <div className={`${styles.stage} ${stage === 4 ? styles.stageActive : ''}`}>
                <div className={`${styles.leadCard} ${styles.floating}`}>
                    <div className={`${styles.line} ${styles.head}`}></div>
                    <div className={styles.line}></div>
                    <div className={`${styles.line} ${styles.accent}`}></div>
                </div>
                <div className={styles.label}>Lead Captured</div>
            </div>

            {/* 5. CRM AUTOMATION */}
            <div className={`${styles.stage} ${stage === 5 ? styles.stageActive : ''}`}>
                <div className={styles.node}>📁</div>
                <div className={styles.label}>Saved to CRM</div>
            </div>

            {/* 6. JOBBER SYNC */}
            <div className={`${styles.stage} ${stage === 6 ? styles.stageActive : ''}`}>
                <div className={styles.syncGroup}>
                    <div className={styles.node}>📁</div>
                    <div className={styles.arrow}>&rarr;</div>
                    <div className={styles.node} style={{ borderColor: '#00C2D1' }}>⚙️</div>
                </div>
                <div className={styles.label}>Syncing to Jobber</div>
            </div>

            {/* 7. JOB CREATED */}
            <div className={`${styles.stage} ${stage === 7 ? styles.stageActive : ''}`}>
                <div className={styles.check}>✅</div>
                <div className={styles.label}>Job Created in Jobber</div>
            </div>

            {/* 8. FOLLOW-UP */}
            <div className={`${styles.stage} ${stage === 8 ? styles.stageActive : ''}`}>
                <div className={`${styles.node} ${styles.floating}`}>📲</div>
                <div className={styles.label}>Customer Notified Automatically</div>
            </div>

        </div>
    );
}
