'use client';
import { useState, useEffect } from 'react';
import styles from './CallAgentIPhone.module.css';

export default function CallAgentIPhone() {
    const [stage, setStage] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setStage((prev) => (prev === 6 ? 1 : prev + 1));
        }, 3500); // Slower pacing for better storytelling
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.canvas}>
            <div className={styles.iphone}>
                <div className={styles.notch}></div>
                <div className={styles.screen}>

                    {/* STAGE 1 & 2: ACTIVE CALL AIAURA */}
                    <div className={`${styles.stage} ${stage <= 2 ? styles.stageActive : ''}`}>
                        <div className={styles.aiHeader}>
                            <div className={styles.aiIconWrap} style={{ borderColor: '#00C2D1' }}>
                                <div className={styles.aiIconInner} style={{ background: 'rgba(0, 194, 209, 0.05)', color: '#00C2D1' }}>🤖</div>
                            </div>
                            <h3 className={styles.aiName}>JOBBEI</h3>
                            <p className={styles.timer}>00:08</p>
                        </div>

                        <div className={styles.waveform}>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <div key={i} className={styles.bar} style={{
                                    animationDelay: `${i * 0.1}s`,
                                    height: stage === 1 ? '10px' : '30px'
                                }}></div>
                            ))}
                        </div>

                        <div className={styles.bubble}>
                            {stage === 1
                                ? "Hello! JOBBEI AI here. How can I help?"
                                : "\"Does Tuesday at 10 AM work?\""
                            }
                        </div>

                        <div className={styles.controls}>
                            <div className={styles.cBtn}>🎤</div>
                            <div className={styles.cBtn + ' ' + styles.cBtnEnd}>📞</div>
                            <div className={styles.cBtn}>🔘</div>
                        </div>
                    </div>

                    {/* STAGE 3: DATA EXTRACTION */}
                    <div className={`${styles.stage} ${stage === 3 ? styles.stageActive : ''}`}>
                        <div className={styles.statusContent}>
                            <div className={styles.statusIcon}>🧠</div>
                            <h3 style={{ marginBottom: 20 }}>JOBBEI Intelligence</h3>
                            <div className={styles.statusCard}>
                                <h4>Lead Identified</h4>
                                <p>Window Cleaning</p>
                                <p style={{ marginTop: 5 }}>Tuesday @ 10:00 AM</p>
                            </div>
                        </div>
                    </div>

                    {/* STAGE 4: SYNCING TO JOBBER */}
                    <div className={`${styles.stage} ${stage === 4 ? styles.stageActive : ''}`}>
                        <div className={styles.statusContent}>
                            <div className={styles.statusIcon} style={{ animation: 'spin 2s linear infinite' }}>⚙️</div>
                            <h3>Syncing to Jobber</h3>
                            <p style={{ opacity: 0.6, marginTop: 10 }}>Automating schedule entry...</p>
                        </div>
                    </div>

                    {/* STAGE 5: CONFIRMATION */}
                    <div className={`${styles.stage} ${stage === 5 ? styles.stageActive : ''}`}>
                        <div className={styles.statusContent}>
                            <div style={{
                                width: 80, height: 80, background: '#00C2D1', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem',
                                marginBottom: 20
                            }}>✓</div>
                            <h3 style={{ fontSize: '1.5rem' }}>Success</h3>
                            <p style={{ opacity: 0.8 }}>Job created in Jobber</p>
                        </div>
                    </div>

                    {/* STAGE 6: FOLLOW-UP NOTIFICATION */}
                    <div className={`${styles.stage} ${stage === 6 ? styles.stageActive : ''}`}>
                        <div className={styles.lockOverlay}>
                            <h2 className={styles.lockTime}>12:45</h2>
                            <div className={styles.lockNotif}>
                                <div className={styles.notifApp}>J</div>
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: '0.85rem' }}>JOBBEI AI</div>
                                    <div style={{ fontSize: '0.8rem' }}>Success! Your job has been booked and synced to Jobber.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
