import styles from './PerfectFor.module.css';

export default function PerfectFor() {
    return (
        <section className={styles.perfectFor}>
            <div className={styles.container}>
                {/* LEFT CONTENT */}
                <div className={styles.content}>
                    <h2 className={styles.headline}>
                        The Ultimate <span className={styles.highlight}>Jobber Sidekick.</span>
                    </h2>
                    <p className={styles.description}>
                        Designed for owner-operated teams doing $250K–$10M. JOBBEI acts as your <strong>AI Front-Office</strong>, handling every call, text, and lead instantly.
                        We replace the need for a full-time receptionist so you can focus on operations.
                    </p>

                    <div className={styles.list}>
                        <div className={styles.listItem}>
                            <div className={styles.checkIcon}>✓</div>
                            <div className={styles.itemContent}>
                                <h3>Replaces Your Full-Time Receptionist</h3>
                                <p>AI answers inbound calls instantly in a natural American tone, qualifying leads and handling objections 24/7.</p>
                            </div>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.checkIcon}>✓</div>
                            <div className={styles.itemContent}>
                                <h3>Zero Manual CRM Entry</h3>
                                <p>JOBBEI structures every messy conversation into clean data and syncs it directly to Jobber. No more data entry.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT VISUALIZATION - FLOATING HUB */}
                <div className={styles.visualWrapper}>
                    <div className={styles.gridOverlay}></div>

                    {/* CENTRAL HUB CARD */}
                    <div className={styles.centralHub}>
                        <div className={styles.hubHeader}>
                            <div className={styles.verifiedBadge}>
                                <span className={styles.verifiedIcon}>✓</span> VERIFIED ARCHITECTURE
                            </div>
                            <div className={styles.hubIcon}>⚡</div>
                        </div>

                        <h3 className={styles.hubTitle}>Front-Office Automation</h3>
                        <div className={styles.hubId}>ID: JOBBEI-AI-AUTO-V4</div>

                        <div className={styles.hubSection}>
                            <div className={styles.labelRow}>
                                <span>Front-Office DNA</span>
                                <span>100% Coverage</span>
                            </div>
                            <div className={styles.dnaBar}>
                                <div className={styles.dnaProgress}></div>
                            </div>
                        </div>

                        <div className={styles.hubGrid}>
                            <div className={styles.miniStats}>
                                <div className={styles.statLabel}>Missed Calls</div>
                                <div className={styles.statValue}>0%</div>
                            </div>
                            <div className={styles.monitoringBtn}>SYSTEM ACTIVE</div>
                        </div>

                        <div className={styles.activityGraph}>
                            <div className={styles.graphLabel}>
                                <span>Lead Capture Activity</span>
                                <span className={styles.goldText} style={{ color: '#00C2D1' }}>+42%</span>
                            </div>
                            <div className={styles.bars}>
                                <div className={styles.bar} style={{ height: '40%' }}></div>
                                <div className={styles.bar} style={{ height: '60%' }}></div>
                                <div className={styles.bar} style={{ height: '45%' }}></div>
                                <div className={styles.bar} style={{ height: '80%' }}></div>
                                <div className={styles.bar} style={{ height: '55%' }}></div>
                                <div className={styles.bar} style={{ height: '90%' }}></div>
                                <div className={styles.bar} style={{ height: '70%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* FLOATING SATELLITES */}

                    {/* Top Left: Agents */}
                    <div className={`${styles.floatCard} ${styles.agentsCard}`}>
                        <div className={styles.agentAvatars}>
                            <div className={styles.avatar} style={{ background: '#00C2D1' }}>📞</div>
                            <div className={styles.avatar} style={{ background: '#7EE7F2' }}>💬</div>
                            <div className={styles.avatarCount}>+3</div>
                        </div>
                        <div className={styles.floatText}>
                            <div className={styles.floatLabel}>TEAM</div>
                            <div className={styles.floatValue}>JOBBEI AI</div>
                        </div>
                    </div>

                    {/* Top Right: Status */}
                    <div className={`${styles.floatCard} ${styles.statusCard}`}>
                        <div className={styles.statusIcon}>✓</div>
                        <div className={styles.floatText}>
                            <div className={styles.floatLabel}>STATUS</div>
                            <div className={styles.floatValue}>100% Online</div>
                        </div>
                    </div>

                    {/* Bottom Left: Velocity */}
                    <div className={`${styles.floatCard} ${styles.velocityCard}`}>
                        <div className={styles.velocityIcon}>⚡</div>
                        <div className={styles.floatText}>
                            <div className={styles.floatLabel}>VELOCITY</div>
                            <div className={styles.floatValue}>Instant Reply</div>
                        </div>
                    </div>

                    {/* Bottom Right: ROI */}
                    <div className={`${styles.floatCard} ${styles.roiCard}`}>
                        <div className={styles.graphLine}>
                            <svg viewBox="0 0 50 30" className={styles.sparkline}>
                                <path d="M0 25 L10 20 L20 22 L30 10 L40 15 L50 5" fill="none" stroke="#00C2D1" strokeWidth="3" />
                            </svg>
                        </div>
                        <div className={styles.floatTextRight}>
                            <div className={styles.floatLabel}>PROJ. ROI</div>
                            <div className={styles.floatValueGold}>+204%</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
