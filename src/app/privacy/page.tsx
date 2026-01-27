'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './LegalPage.module.css';

export default function PrivacyPage() {
    return (
        <main className={styles.page}>
            <Navbar />

            <div className={styles.container}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last Updated: January 25, 2026</p>

                <div className={styles.content}>
                    <p>At JOBBEI AI ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website jobbei.ai or use our services.</p>

                    <h2>1. Information We Collect</h2>
                    <p>We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or communicate with our AI agents.</p>
                    <ul>
                        <li><strong>Personal Information:</strong> Name, email address, phone number, business name, and payment information.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our website and services, including IP address, browser type, and device information.</li>
                        <li><strong>Communication Data:</strong> Call recordings, transcripts, and message logs generated through our AI services, which are stored securely to provide and improve our service.</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our services.</li>
                        <li>Process transactions and send related information, such as confirmations and invoices.</li>
                        <li>Send you technical notices, updates, security alerts, and support messages.</li>
                        <li>Respond to your comments, questions, and requests.</li>
                        <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                        <li>Train and improve our AI models (using anonymized data only).</li>
                    </ul>

                    <h2>3. Data Security</h2>
                    <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

                    <h2>4. Third-Party Services</h2>
                    <p>We may share information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf (e.g., payment processors, cloud hosting providers).</p>

                    <h2>5. Your Rights</h2>
                    <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us at support@jobbei.ai.</p>

                    <h2>6. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, provide you with additional notice.</p>

                    <h2>7. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@jobbei.ai">support@jobbei.ai</a>.</p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
