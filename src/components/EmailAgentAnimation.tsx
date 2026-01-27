'use client';
import { useState, useEffect } from 'react';
import styles from './EmailAgentAnimation.module.css';

export default function EmailAgentAnimation() {
    const [stage, setStage] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setStage((prev) => (prev === 5 ? 1 : prev + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.canvas}>
            {/* EMAIL HEADER */}
            <div className={styles.emailHeader}>
                <div className={styles.icon}>📧</div>
                <div className={styles.title}>JOBBEI Campaign Engine</div>
            </div>

            {/* CONTENT BODY */}
            <div className={styles.contentBody}>
                <div className={styles.placeholderLine} style={{ width: '90%' }}></div>
                <div className={styles.placeholderLine} style={{ width: '40%' }}></div>

                {/* STAGE 2-3: AI GENERATING */}
                <div className={`${styles.aiMessage} ${(stage >= 2 && stage < 4) ? styles.aiMessageActive : ''} ${stage === 2 ? styles.pulse : ''}`}>
                    {stage === 2 ? "AI Generating Seasonal Campaign..." : "Campaign Finalized for Window Cleaning"}
                </div>

                {/* STAGE 3: PERSONALIZATION DATA */}
                <div className={`${styles.tagCloud} ${stage === 3 ? styles.tagCloudActive : ''}`}>
                    <div className={styles.tag}>Residential</div>
                    <div className={styles.tag + ' ' + styles.tagHighlight}>Jobber Profile: Active</div>
                    <div className={styles.tag}>Location: New York</div>
                    <div className={styles.tag + ' ' + styles.tagHighlight}>History: 12 Months</div>
                </div>

                <div className={styles.placeholderLine} style={{ width: '70%', marginTop: 10 }}></div>
            </div>

            {/* STAGE 4: SUCCESS OVERLAY */}
            <div className={`${styles.successOverlay} ${stage === 4 ? styles.successOverlayActive : ''}`}>
                <div className={styles.check}>✓</div>
                <h3 style={{ fontWeight: 800 }}>Campaign Sent</h3>
                <p style={{ fontSize: '0.85rem', color: '#666' }}>Delivered to 1,240 qualified leads</p>
            </div>

            {/* STAGE 5: ROI OVERLAY */}
            <div className={`${styles.successOverlay} ${stage === 5 ? styles.successOverlayActive : ''}`}>
                <h2 style={{ fontWeight: 900, color: '#1A1A1A' }}>ROI Analytics</h2>
                <div className={styles.roiBadge}>+34% Repeat Business</div>
                <p style={{ fontSize: '0.8rem', color: '#00C2D1', marginTop: 15, fontWeight: 700 }}>Generated through JOBBEI Automations</p>
            </div>
        </div>
    );
}
