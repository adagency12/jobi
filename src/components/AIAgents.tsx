import Link from 'next/link';
import styles from './AIAgents.module.css';

// Custom SVG Icons
const FeatureIcons = {
    Check: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
    Clock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    Zap: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
};

export default function AIAgents() {
    return (
        <section className={styles.aiAgents}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>The Ultimate Jobber Sidekick</h2>
                    <p className={styles.tagline}>RECEPTIONIST, SALES REP, SCHEDULER & MARKETING MANAGER — ALL IN ONE.</p>
                </div>

                <div className={styles.grid}>

                    {/* 1. CALL AGENT (Process: Call -> Qualify -> Jobber Sync) */}
                    <Link href="/services/call-agent" className={styles.card}>
                        <div className={styles.uiHeader}>
                            <div className={styles.processContainer}>
                                <div className={styles.stepOne}>
                                    <div className={styles.waveformContainer}>
                                        <div className={styles.wave}></div><div className={styles.wave}></div><div className={styles.wave}></div><div className={styles.wave}></div><div className={styles.wave}></div>
                                    </div>
                                    <div className={styles.callLabel}>Qualifying Lead...</div>
                                </div>
                                <div className={styles.stepTwo}>
                                    <div className={styles.syncCard}>
                                        <div className={styles.jobberLogo}>J</div>
                                        <div className={styles.syncText}>
                                            <div className={styles.syncTitle}>New Job Created</div>
                                            <div className={styles.syncSub}>Roof Cleaning - $450</div>
                                        </div>
                                        <div className={styles.checkCircle}>✓</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <div>
                                <div className={styles.agentHeader}>
                                    <div className={styles.miniIcon}>📞</div>
                                    <h3 className={styles.agentName}>AI Call Agent</h3>
                                </div>
                                <p className={styles.agentDescription}>A human-like AI voice that answers customer calls, qualifies service requests, and sends jobs directly into Jobber.</p>
                            </div>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Answers Customer Calls Instantly</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Available 24/7 for Service Requests</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Sounds Like Professional Staff</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Qualifies Jobs, Estimates & Urgency</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Saves Call Details to CRM</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Sends Ready-to-Book Leads to Jobber</div>
                            </div>
                        </div>
                    </Link>

                    {/* 2. CHAT AGENT (Process: Visitor -> Chat -> Capture Info) */}
                    <Link href="/services/chat-agent" className={styles.card}>
                        <div className={styles.uiHeader}>
                            <div className={styles.chatProcess}>
                                <div className={styles.messageBubble + ' ' + styles.msgLeft}>Quote for 3bed house?</div>
                                <div className={styles.messageBubble + ' ' + styles.msgRight}>Sure! I can help with that.</div>
                                <div className={styles.captureForm}>
                                    <div className={styles.formHeader}>Lead Captured</div>
                                    <div className={styles.formRow}><div className={styles.formLabel}>Name</div><div className={styles.formValue}>Mike T.</div></div>
                                    <div className={styles.formRow}><div className={styles.formLabel}>Phone</div><div className={styles.formValue}>555-0123</div></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <div>
                                <div className={styles.agentHeader}>
                                    <div className={styles.miniIcon}>💬</div>
                                    <h3 className={styles.agentName}>Website Chat Agent</h3>
                                </div>
                                <p className={styles.agentDescription}>An AI chat agent that turns website visitors into booked service leads.</p>
                            </div>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Responds to Inquiries Instantly</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Asks the Right Questions</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Captures Job Details & Property Info</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Handles Quotes, Estimates & Callbacks</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Logs Chats into CRM</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Syncs Qualified Leads to Jobber</div>
                            </div>
                        </div>
                    </Link>

                    {/* 3. SMS FAQ AGENT (Process: Question -> Knowledge Base -> Answer) */}
                    <Link href="/services/sms-faq" className={styles.card}>
                        <div className={styles.uiHeader}>
                            <div className={styles.smsProcess}>
                                <div className={styles.smsBubble + ' ' + styles.smsCustomer}>Do you work weekends?</div>
                                <div className={styles.processingDot}>
                                    <div className={styles.gearIcon}>⚙️</div>
                                    <span>Checking Schedule...</span>
                                </div>
                                <div className={styles.smsBubble + ' ' + styles.smsAi}>Yes! We have a slot this Saturday at 10am.</div>
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <div>
                                <div className={styles.agentHeader}>
                                    <div className={styles.miniIcon}>📱</div>
                                    <h3 className={styles.agentName}>SMS FAQ Agent</h3>
                                </div>
                                <p className={styles.agentDescription}>A human-style SMS agent that answers customer texts about services, pricing, and availability.</p>
                            </div>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Replies to Customer Texts Instantly</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Feels Like a Real Office Assistant</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Answers Service, Pricing & Area FAQs</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Handles Ongoing Customer Conversations</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Logs Messages & Requests to CRM</div>
                                <div className={styles.featureItem}><FeatureIcons.Check /> Sends Text Leads into Jobber</div>
                            </div>
                        </div>
                    </Link>

                    {/* 4. EMAIL MARKETING (Process: Sequence Flow -> Open -> Click) */}
                    <Link href="/services/email-marketing" className={styles.card}>
                        <div className={styles.uiHeader}>
                            <div className={styles.emailFlow}>
                                <div className={styles.emailStack}>
                                    <div className={styles.emailItem + ' ' + styles.email1}>
                                        <div className={styles.emailIcon}>✉️</div>
                                        <div className={styles.emailText}>Spring Cleanup Offer</div>
                                    </div>
                                    <div className={styles.emailItem + ' ' + styles.email2}>
                                        <div className={styles.emailIcon}>✉️</div>
                                        <div className={styles.emailText}>Follow-up: 10% Off</div>
                                    </div>
                                    <div className={styles.emailItem + ' ' + styles.email3}>
                                        <div className={styles.emailIcon}>📅</div>
                                        <div className={styles.emailText}>Ready to Book?</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <div>
                                <div className={styles.agentHeader}>
                                    <div className={styles.miniIcon}>📧</div>
                                    <h3 className={styles.agentName}>Email Marketing Automation</h3>
                                </div>
                                <p className={styles.agentDescription}>AI-powered email campaigns that follow up with customers about services, estimates, and seasonal work.</p>
                            </div>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}><FeatureIcons.Clock /> AI-Written Emails for Home Services</div>
                                <div className={styles.featureItem}><FeatureIcons.Clock /> Personalized by Service & Location</div>
                                <div className={styles.featureItem}><FeatureIcons.Clock /> Uses Job History & CRM Data</div>
                                <div className={styles.featureItem}><FeatureIcons.Clock /> Automated Follow-Ups & Promotions</div>
                                <div className={styles.featureItem}><FeatureIcons.Clock /> Mobile-Friendly for Customers</div>
                                <div className={styles.featureItem}><FeatureIcons.Clock /> Brings Back Repeat Service Jobs</div>
                            </div>
                        </div>
                    </Link>

                    {/* 5. SMS MARKETING (Process: Select Audience -> Blast -> Bookings) */}
                    <Link href="/services/sms-marketing" className={styles.card}>
                        <div className={styles.uiHeader}>
                            <div className={styles.campaignProcess}>
                                <div className={styles.audienceGroup}>
                                    <div className={styles.userDot}></div><div className={styles.userDot}></div><div className={styles.userDot}></div>
                                </div>
                                <div className={styles.blastLine}>
                                    <div className={styles.signal}></div>
                                </div>
                                <div className={styles.phoneGroup}>
                                    <div className={styles.phoneScreen}>Offer Sent</div>
                                    <div className={styles.phoneScreen + ' ' + styles.phoneBooked}>Booked!</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardBody}>
                            <div>
                                <div className={styles.agentHeader}>
                                    <div className={styles.miniIcon}>🚀</div>
                                    <h3 className={styles.agentName}>SMS Marketing Automation</h3>
                                </div>
                                <p className={styles.agentDescription}>Automated SMS campaigns that promote services, reminders, and seasonal offers.</p>
                            </div>
                            <div className={styles.featureList}>
                                <div className={styles.featureItem}><FeatureIcons.Zap /> Service-Based SMS Campaigns</div>
                                <div className={styles.featureItem}><FeatureIcons.Zap /> Personalized by Job Type & Season</div>
                                <div className={styles.featureItem}><FeatureIcons.Zap /> Uses CRM & Jobber Customer Data</div>
                                <div className={styles.featureItem}><FeatureIcons.Zap /> Jobber-Native Data Sync</div>
                                <div className={styles.featureItem}><FeatureIcons.Zap /> Opt-Out Compliant for Customers</div>
                                <div className={styles.featureItem}><FeatureIcons.Zap /> Increases Repeat Bookings</div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
