'use client';
import { useState, useEffect } from 'react';
import styles from './SMSMarketingAnimation.module.css';

export default function SMSMarketingAnimation() {
    const [stage, setStage] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setStage((prev) => (prev === 6 ? 1 : prev + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const bars = [
        { label: 'JAN', height: '40%' },
        { label: 'FEB', height: '65%' },
        { label: 'MAR', height: '90%' },
        { label: 'APR', height: '100%' },
    ];

    return (
        <div className={styles.canvas}>
            {/* SMS MARKETING HEADER */}
            <div className={styles.smsHeader}>
                <div className={styles.icon}>📢</div>
                <div className={styles.title}>JOBBEI SMS Campaigner</div>
            </div>

            <div className={styles.mainArea}>
                {/* STAGE 1: PLANNING */}
                {stage === 1 && (
                    <div className={styles.statusMsg}>
                        Planning Spring Clean Campaign...
                    </div>
                )}

                {/* STAGE 2: SENDING */}
                {stage === 2 && (
                    <div className={styles.statusMsg} style={{ background: '#00C2D1', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
                        📲 Mailing 840 Leads...
                    </div>
                )}

                {/* STAGE 3-4: GROWTH CHART */}
                {(stage >= 3 && stage <= 4) && (
                    <div className={styles.chartArea}>
                        {bars.map((bar, idx) => (
                            <div
                                key={idx}
                                className={`${styles.bar} ${stage >= 3 && (idx < (stage - 1)) ? styles.barActive : ''}`}
                                style={{ height: stage >= 3 && (idx < (stage - 1)) ? bar.height : '10%' }}
                            >
                                <span className={`${styles.barLabel} ${stage >= 3 && (idx < (stage - 1)) ? styles.barLabelActive : ''}`}>
                                    {bar.label}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {/* STAGE 3 TEXT */}
                {stage === 3 && <div style={{ textAlign: 'center', fontSize: '0.8rem', opacity: 0.6 }}>Campaign Response Growing...</div>}
                {stage === 4 && <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#0097A7', fontWeight: 600 }}>Syncing ROI Data to Jobber...</div>}
            </div>

            {/* STAGE 5: ROI SUCCESS */}
            <div className={`${styles.overlay} ${stage === 5 ? styles.overlayActive : ''}`}>
                <div className={styles.check}>✓</div>
                <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: 2, marginBottom: 10 }}>Campaign Result</div>
                <div className={styles.roiVal}>+34%</div>
                <div style={{ fontWeight: 800, marginTop: 10 }}>Sales Growth</div>
            </div>

            {/* STAGE 6: CRM SYNC LOGO */}
            <div className={`${styles.overlay} ${stage === 6 ? styles.overlayActive : ''}`} style={{ background: '#FFFFFF', color: '#1A1A1A' }}>
                <div style={{ fontSize: '3rem' }}>🔗</div>
                <h3 style={{ fontWeight: 900 }}>Jobber CRM</h3>
                <div className={styles.syncLine}>
                    <div className={styles.syncFill}></div>
                </div>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#00C2D1' }}>Automation Lead Sync Complete</p>
            </div>
        </div>
    );
}
