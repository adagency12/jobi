'use client';
import { useState, useEffect } from 'react';
import styles from './ChatAgentAnimation.module.css';

export default function ChatAgentAnimation() {
    const [stage, setStage] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setStage((prev) => (prev === 6 ? 1 : prev + 1));
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.canvas}>
            {/* CHAT HEADER */}
            <div className={styles.chatHeader}>
                <div className={styles.avatar}>J</div>
                <div>
                    <div className={styles.title}>JOBBEI Chat Agent</div>
                    <div style={{ fontSize: '0.7rem', color: '#666' }}>
                        <span className={styles.online}></span>
                        Online | AI Assistant
                    </div>
                </div>
            </div>

            {/* CHAT BODY */}
            <div className={styles.chatBody}>
                {/* STAGE 1+: AI GREETING */}
                <div className={`${styles.bubble} ${styles.ai} ${stage >= 1 ? styles.bubbleActive : ''}`}>
                    Hello! Need a quote?
                </div>

                {/* STAGE 2+: USER RESPONSE */}
                <div className={`${styles.bubble} ${styles.user} ${stage >= 2 ? styles.bubbleActive : ''}`} style={{ transitionDelay: '0.5s' }}>
                    Yes, window cleaning.
                </div>

                {/* STAGE 3+: AI QUALIFICATION */}
                <div className={`${styles.bubble} ${styles.ai} ${stage >= 3 ? styles.bubbleActive : ''}`} style={{ transitionDelay: '1s' }}>
                    How many panes total?
                </div>

                {/* STAGE 4: TYPING INDICATOR (ONLY IN STAGE 4) */}
                {stage === 4 && (
                    <div className={styles.typing}>
                        <div className={styles.dot}></div>
                        <div className={`${styles.dot} ${styles.dotStyle2}`}></div>
                        <div className={`${styles.dot} ${styles.dotStyle3}`}></div>
                    </div>
                )}
            </div>

            {/* INPUT BOX */}
            <div className={styles.input}>
                {stage === 2 ? "User is typing..." : "Type message..."}
            </div>

            {/* OVERLAY - LEAD CAPTURED (STAGE 5) */}
            <div className={`${styles.overlay} ${stage === 5 ? styles.overlayActive : ''}`}>
                <div className={styles.icon}>📋</div>
                <h3 style={{ fontWeight: 800 }}>Lead Captured</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: 10 }}>
                    Service: Window Cleaning <br />
                    Source: Website Chat
                </p>
            </div>

            {/* OVERLAY - JOBBER SYNC (STAGE 6) */}
            <div className={`${styles.overlay} ${stage === 6 ? styles.overlayActive : ''}`}>
                <div className={styles.icon}>🔗</div>
                <h2 style={{ fontWeight: 900 }}>Jobber Sync</h2>
                <div className={styles.syncLine}>
                    <div className={styles.fill}></div>
                </div>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#00C2D1' }}>
                    Sending to Jobber CRM...
                </p>
            </div>
        </div>
    );
}
