import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import CallAgentIPhone from '@/components/CallAgentIPhone';
import ChatAgentAnimation from '@/components/ChatAgentAnimation';
import SMSAgentAnimation from '@/components/SMSAgentAnimation';
import EmailAgentAnimation from '@/components/EmailAgentAnimation';
import SMSMarketingAnimation from '@/components/SMSMarketingAnimation';
import Link from 'next/link';
import styles from './ServicesPage.module.css';

export default function ServicesPage() {
    return (
        <main className={styles.page}>
            <Navbar />

            {/* HERO SECTION */}
            <section className={styles.hero + ' ' + styles.section}>
                <AnimatedBackground mode="container" />
                <div className={styles.container}>
                    <div className={styles.badge}>Elite Automation Suite</div>
                    <h1 className={styles.heroTitle}>AI Automation Services <br /> <span>Built for Home Services.</span></h1>
                    <p className={styles.subtitle}>
                        JOBBEI provides intelligent automation for calls, chats, texts, and marketing—helping home service businesses respond faster, capture cleaner leads, and keep their operations organized without hiring additional office staff.
                    </p>
                </div>
            </section>

            {/* 1. AI CALL AGENT (CYAN SECTION) - LTR */}
            <section className={styles.cyanSection + ' ' + styles.section} style={{ background: '#00C2D1', color: '#FFFFFF' }}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2 className={styles.featureTitle}>AI Call <span>Agent</span></h2>
                        <p className={styles.featureDesc}>
                            A human-like AI voice that answers customer calls, qualifies service requests, and sends jobs directly into Jobber.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>⚡ Answers Customer Calls Instantly</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🕒 Available 24/7 for Service Requests</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🎙️ Sounds Like a Professional Office Staff</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🧠 Qualifies Jobs, Estimates & Urgency</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🗂️ Saves Call Details to CRM</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🔗 Sends Ready-to-Book Leads to Jobber</li>
                        </ul>
                        <Link href="/services/call-agent" className={styles.btn + ' ' + styles.btnPrimary} style={{ background: '#FFFFFF', color: '#00C2D1', fontWeight: 800 }}>Learn More &rarr;</Link>
                    </div>
                    <div className={styles.visual}>
                        <CallAgentIPhone />
                    </div>
                </div>
            </section>

            {/* 2. WEBSITE CHAT AGENT (WHITE SECTION) - RTL */}
            <section className={styles.whiteSection + ' ' + styles.section}>
                <div className={styles.container} style={{ direction: 'rtl' }}>
                    <div className={styles.content} style={{ direction: 'ltr' }}>
                        <h2 className={styles.featureTitle}>Website Chat <span>Agent</span></h2>
                        <p className={styles.featureDesc}>
                            An AI chat agent that turns website visitors into booked service leads.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>💬 Responds to Service Inquiries Instantly</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🧠 Asks the Right Questions for Your Services</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>📋 Captures Job Details & Property Info</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>⏱️ Handles Quotes, Estimates & Callbacks</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🗂️ Logs Chats into CRM</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🔗 Syncs Qualified Leads to Jobber</li>
                        </ul>
                        <Link href="/services/chat-agent" className={styles.btn + ' ' + styles.btnPrimary}>Get Started &rarr;</Link>
                    </div>
                    <div className={styles.visual} style={{ direction: 'ltr' }}>
                        <ChatAgentAnimation />
                    </div>
                </div>
            </section>

            {/* 3. SMS FAQ AGENT (CYAN SECTION) - LTR */}
            <section className={styles.cyanSection + ' ' + styles.section} style={{ background: '#00C2D1', color: '#FFFFFF' }}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2 className={styles.featureTitle}>SMS FAQ <span>Agent</span></h2>
                        <p className={styles.featureDesc}>
                            A human-style SMS agent that answers customer texts about services, pricing, and availability.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>📲 Replies to Customer Texts Instantly</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🤖 Feels Like a Real Office Assistant</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🧾 Answers Service, Pricing & Area FAQs</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🔁 Handles Ongoing Customer Conversations</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🗂️ Logs Messages & Requests to CRM</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🔗 Sends Text Leads into Jobber</li>
                        </ul>
                        <Link href="/services/sms-faq" className={styles.btn + ' ' + styles.btnPrimary} style={{ background: '#FFFFFF', color: '#00C2D1', fontWeight: 800 }}>Learn More &rarr;</Link>
                    </div>
                    <div className={styles.visual}>
                        <SMSAgentAnimation />
                    </div>
                </div>
            </section>

            {/* 4. EMAIL MARKETING AUTOMATION (WHITE SECTION) - RTL */}
            <section className={styles.whiteSection + ' ' + styles.section}>
                <div className={styles.container} style={{ direction: 'rtl' }}>
                    <div className={styles.content} style={{ direction: 'ltr' }}>
                        <h2 className={styles.featureTitle}>Email Marketing <span>Automation</span></h2>
                        <p className={styles.featureDesc}>
                            AI-powered email campaigns that follow up with customers about services, estimates, and seasonal work.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>📧 AI-Written Emails for Home Services</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🎯 Personalized by Service & Location</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🧠 Uses Job History & CRM Data</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>📆 Automated Follow-Ups & Promotions</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>📱 Mobile-Friendly for Customers</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>📈 Brings Back Repeat Service Jobs</li>
                        </ul>
                        <Link href="/services/email-marketing" className={styles.btn + ' ' + styles.btnPrimary}>Skyrocket ROI &rarr;</Link>
                    </div>
                    <div className={styles.visual} style={{ direction: 'ltr' }}>
                        <EmailAgentAnimation />
                    </div>
                </div>
            </section>

            {/* 5. SMS MARKETING AUTOMATION (CYAN SECTION) - LTR */}
            <section className={styles.cyanSection + ' ' + styles.section} style={{ background: '#00C2D1', color: '#FFFFFF' }}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2 className={styles.featureTitle}>SMS Marketing <span>Automation</span></h2>
                        <p className={styles.featureDesc}>
                            Automated SMS campaigns that promote services, reminders, and seasonal offers.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>📢 Service-Based SMS Campaigns</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🎯 Personalized by Job Type & Season</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🧠 Uses CRM & Jobber Customer Data</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>⏱️ Sends Reminders, Offers & Updates</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>🚫 Opt-Out Compliant for Customers</li>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>📈 Increases Repeat Bookings</li>
                        </ul>
                        <Link href="/services/sms-marketing" className={styles.btn + ' ' + styles.btnPrimary} style={{ background: '#FFFFFF', color: '#00C2D1', fontWeight: 800 }}>Increase Bookings &rarr;</Link>
                    </div>
                    <div className={styles.visual}>
                        <SMSMarketingAnimation />
                    </div>
                </div>
            </section>



            <Footer />
        </main>
    );
}
