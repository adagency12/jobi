import styles from './JobberIntegration.module.css';

const Icons = {
    Sync: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.syncSpinner}>
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
        </svg>
    ),
    Auto: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>,
    Speed: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    Clean: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    ArrowRight: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
};

export default function JobberIntegration() {
    return (
        <section className={styles.jobberIntegration}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Complete Front-Office Automation</h2>
                    <p className={styles.subtitle}>JOBBEI captures, qualifies, and syncs leads directly to Jobber—replacing hours of manual office work.</p>
                </div>

                <div className={styles.integrationStage}>

                    {/* 1. JOBBEI CHAT (Capture) */}
                    <div className={styles.stepColumn}>
                        <div className={`${styles.mockupCard} ${styles.jobbeiCard}`}>
                            <div className={styles.mockupHeader}>
                                <div className={styles.appBrand}><span className={styles.jobbeiBrand}>JOBBEI</span> Lead Capture</div>
                                <div className={styles.trafficLights}><div className={`${styles.light} ${styles.red}`}></div><div className={`${styles.light} ${styles.yellow}`}></div><div className={`${styles.light} ${styles.green}`}></div></div>
                            </div>
                            <div className={styles.mockupBody}>
                                <div className={styles.chatThread}>
                                    <div className={styles.msg + ' ' + styles.msgUser}>I need my gutters cleaned.</div>
                                    <div className={styles.msg + ' ' + styles.msgAi}>Address?</div>
                                    <div className={styles.msg + ' ' + styles.msgUser}>123 Maple Dr. Name&apos;s Mike.</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.stepLabel}>1. Auto-Capture</div>
                    </div>

                    <div className={styles.arrowSpacer}><Icons.ArrowRight /></div>

                    {/* 2. MIDDLE BOX: CLEAN DATA (Process) */}
                    <div className={styles.stepColumn}>
                        <div className={`${styles.mockupCard} ${styles.dataCard}`}>
                            <div className={styles.mockupHeader}>
                                <div className={styles.appBrand}><span className={styles.jobbeiBrand}>AI</span> Processor</div>
                                <div className={styles.trafficLights}><div className={`${styles.light} ${styles.red}`}></div><div className={`${styles.light} ${styles.yellow}`}></div><div className={`${styles.light} ${styles.green}`}></div></div>
                            </div>
                            <div className={styles.mockupBody}>
                                <div className={styles.leadExtract}>
                                    <div className={styles.extractLabel}>
                                        <span>VALIDATED DATA</span>
                                        <span>✓ CLEAN</span>
                                    </div>
                                    <div className={styles.dataRow}>
                                        <span className={styles.dataKey}>Client</span>
                                        <span className={styles.dataVal}>Mike S.</span>
                                    </div>
                                    <div className={styles.dataRow}>
                                        <span className={styles.dataKey}>Service</span>
                                        <span className={styles.dataVal}>Gutter Cleaning</span>
                                    </div>
                                    <div className={styles.dataRow}>
                                        <span className={styles.dataKey}>Address</span>
                                        <span className={styles.dataVal}>123 Maple Dr</span>
                                    </div>
                                    <div className={styles.syncStatus}>
                                        <Icons.Sync />
                                        <span>Syncing to Jobber...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.stepLabel}>2. AI Processing</div>
                    </div>

                    <div className={styles.arrowSpacer}><Icons.ArrowRight /></div>

                    {/* 3. JOBBER (Sync) */}
                    <div className={styles.stepColumn}>
                        <div className={`${styles.mockupCard} ${styles.jobberCard}`}>
                            <div className={styles.mockupHeader}>
                                <div className={styles.appBrand}><span className={styles.jobberBrand}>Jobber</span> Sync</div>
                                <div className={styles.trafficLights}><div className={`${styles.light} ${styles.red}`}></div><div className={`${styles.light} ${styles.yellow}`}></div><div className={`${styles.light} ${styles.green}`}></div></div>
                            </div>
                            <div className={styles.mockupBody}>
                                <div className={styles.jobberHeader}>Job Created</div>
                                <div className={styles.requestForm}>
                                    <div className={styles.formField}>
                                        <div className={styles.fieldLabel}>Client Name</div>
                                        <div className={styles.fieldInput}>Mike S.</div>
                                    </div>
                                    <div className={styles.formField}>
                                        <div className={styles.fieldLabel}>Service Type</div>
                                        <div className={styles.fieldInput}>Gutter Cleaning</div>
                                    </div>
                                    <div className={styles.formField}>
                                        <div className={styles.fieldLabel}>Address</div>
                                        <div className={styles.fieldInput}>123 Maple Dr</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.stepLabel}>3. Job Created</div>
                    </div>

                </div>

                <div className={styles.benefitsRow}>
                    <div className={styles.benefitItem}>
                        <div className={styles.benefitIcon}><Icons.Auto /></div>
                        <span className={styles.benefitText}>No Manual Entry</span>
                    </div>
                    <div className={styles.benefitItem}>
                        <div className={styles.benefitIcon}><Icons.Speed /></div>
                        <span className={styles.benefitText}>Instant Sync</span>
                    </div>
                    <div className={styles.benefitItem}>
                        <div className={styles.benefitIcon}><Icons.Clean /></div>
                        <span className={styles.benefitText}>Zero Errors</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
