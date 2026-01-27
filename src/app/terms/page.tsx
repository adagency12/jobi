'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '../privacy/LegalPage.module.css';

export default function TermsPage() {
    return (
        <main className={styles.page}>
            <Navbar />

            <div className={styles.container}>
                <h1 className={styles.title}>Terms of Service</h1>
                <p className={styles.lastUpdated}>Last Updated: January 25, 2026</p>

                <div className={styles.content}>
                    <p>Welcome to JOBBEI AI. By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.</p>

                    <h2>1. Use of Services</h2>
                    <p>You must be at least 18 years old to use our services. You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
                    <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

                    <h2>2. AI Services & Limitations</h2>
                    <p>Our services include AI-powered call answering, messaging, and scheduling. While we strive for high accuracy, you acknowledge that:</p>
                    <ul>
                        <li>AI agents may occasionally make errors or misunderstand inquiries.</li>
                        <li>You are responsible for verifying critical information and supervising the AI's interactions where necessary.</li>
                        <li>We are not liable for any lost business or damages resulting from AI errors or service interruptions.</li>
                    </ul>

                    <h2>3. Subscription & Payments</h2>
                    <p>Some aspects of our services are billed on a subscription basis. You agree to pay all fees associated with your selected plan. Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.</p>

                    <h2>4. Intellectual Property</h2>
                    <p>The services, including all software, text, graphics, and logos, are the property of JOBBEI AI or its licensors and are protected by copyright and other intellectual property laws.</p>

                    <h2>5. Termination</h2>
                    <p>We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.</p>

                    <h2>6. Limitation of Liability</h2>
                    <p>In no event shall JOBBEI AI be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>

                    <h2>7. Governing Law</h2>
                    <p>These Terms shall be governed and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.</p>

                    <h2>8. Changes to Terms</h2>
                    <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes. Your continued use of the services following the posting of any changes constitutes acceptance of those changes.</p>

                    <h2>9. Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us at <a href="mailto:legal@jobbei.ai">legal@jobbei.ai</a>.</p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
