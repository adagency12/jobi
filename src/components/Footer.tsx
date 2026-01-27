import styles from './Footer.module.css';

import Link from 'next/link';

const Icons = {
    Twitter: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
    Linkedin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    Instagram: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerGrid}>

                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <div className={styles.logo}>JOBBEI AI</div>
                        <p className={styles.tagline}>
                            The complete AI Front-Office for home service businesses.
                            Automate calls, messages, and scheduling 24/7.
                        </p>
                        <div className={styles.socialRow}>
                            <div className={styles.socialIcon}><Icons.Twitter /></div>
                            <div className={styles.socialIcon}><Icons.Linkedin /></div>
                            <div className={styles.socialIcon}><Icons.Instagram /></div>
                        </div>
                    </div>



                    {/* Company Links */}
                    <div className={styles.linkCol}>
                        <div className={styles.colTitle}>Company</div>
                        <div className={styles.linkList}>
                            <Link href="/about" className={styles.link}>About Us</Link>
                            <Link href="/careers" className={styles.link}>Careers</Link>
                            <Link href="/blog" className={styles.link}>Blog</Link>
                            <Link href="/contact" className={styles.link}>Contact</Link>
                        </div>
                    </div>

                    {/* Resources Links */}
                    <div className={styles.linkCol}>
                        <div className={styles.colTitle}>Resources</div>
                        <div className={styles.linkList}>
                            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
                            <Link href="/terms" className={styles.link}>Terms of Service</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <div>&copy; {new Date().getFullYear()} JOBBEI AI. All rights reserved.</div>
                    <div className={styles.legalLinks}>
                        <span className={styles.legalLink}>Privacy</span>
                        <span className={styles.legalLink}>Terms</span>
                        <span className={styles.legalLink}>Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
