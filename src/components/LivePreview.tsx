import styles from './LivePreview.module.css';

export default function LivePreview() {
    return (
        <section className={styles.livePreview}>
            <div className={styles.container}>
                <h2 className={styles.title}>Live AI System Preview</h2>

                <div className={styles.mockup}>
                    <div className={styles.panels}>
                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <span className={styles.aiThinking}></span>
                                Call Transcript
                            </div>
                            <div className={styles.transcript}>
                                <div className={styles.message}>
                                    <div className={styles.messageLabel}>AI:</div>
                                    <div>Thank you for calling Acme Cleaning. How can I assist you today?</div>
                                </div>
                                <div className={styles.message}>
                                    <div className={styles.messageLabel}>Customer:</div>
                                    <div>I need my gutters cleaned.</div>
                                </div>
                                <div className={styles.message}>
                                    <div className={styles.messageLabel}>AI:</div>
                                    <div>I&apos;d be happy to help schedule that. May I have your name and address?</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <span className={styles.aiThinking}></span>
                                SMS Conversation
                            </div>
                            <div className={styles.transcript}>
                                <div className={styles.message}>
                                    <div className={styles.messageLabel}>JOBBEI AI:</div>
                                    <div>Hi John, your gutter cleaning at 123 Oak St is confirmed for Tuesday at 2pm. Reply RESCHEDULE if needed.</div>
                                </div>
                                <div className={styles.message}>
                                    <div className={styles.messageLabel}>John:</div>
                                    <div>Perfect, thank you!</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>CRM Lead Data</div>
                            <div className={styles.leadData}>
                                <div className={styles.leadField}>
                                    <span className={styles.fieldLabel}>Name:</span>
                                    <span>John Smith</span>
                                </div>
                                <div className={styles.leadField}>
                                    <span className={styles.fieldLabel}>Service:</span>
                                    <span>Gutter Cleaning</span>
                                </div>
                                <div className={styles.leadField}>
                                    <span className={styles.fieldLabel}>Address:</span>
                                    <span>123 Oak St</span>
                                </div>
                                <div className={styles.leadField}>
                                    <span className={styles.fieldLabel}>Phone:</span>
                                    <span>(555) 123-4567</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.panel}>
                            <div className={styles.panelHeader}>
                                <span className={styles.aiThinking}></span>
                                Jobber Sync
                            </div>
                            <div className={styles.leadData}>
                                <div className={styles.leadField}>
                                    <span className={styles.fieldLabel}>Job Created:</span>
                                    <span>✓</span>
                                </div>
                                <div className={styles.leadField}>
                                    <span className={styles.fieldLabel}>Customer Added:</span>
                                    <span>✓</span>
                                </div>
                                <div className={styles.leadField}>
                                    <span className={styles.fieldLabel}>Route Allocated:</span>
                                    <span>✓</span>
                                </div>
                            </div>
                            <div className={styles.syncStatus}>
                                ✓ Sync Complete — AI Automated
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
