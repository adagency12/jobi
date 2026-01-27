'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>🤖</span>
                    <span>JOBBEI</span>
                </Link>

                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>

                <div className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navLinks}>
                        <li><Link href="/services" className={styles.navLink}>Services</Link></li>
                        <li><Link href="/pricing" className={styles.navLink}>Pricing</Link></li>
                        <li><Link href="/about" className={styles.navLink}>About</Link></li>
                    </ul>
                    <Link href="/contact" className={styles.ctaButton}>Contact Us</Link>
                </div>
            </div>
        </nav>
    );
}
