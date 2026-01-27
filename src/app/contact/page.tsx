'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import styles from './ContactPage.module.css';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        businessName: '',
        interestedProduct: 'AI Call Agent',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await fetch('https://n8n.srv1147675.hstgr.cloud/webhook/Jobbe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            alert('Message sent successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                businessName: '',
                interestedProduct: 'AI Call Agent',
                message: ''
            });
        } catch (error) {
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <main className={styles.page}>
            <AnimatedBackground />
            <Navbar />

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.badge}>Get in Touch</div>
                        <h1 className={styles.title}>Let's Scale Your <span>Business.</span></h1>
                        <p className={styles.subtitle}>
                            Ready to stop missing calls and start booking more jobs? Send us a message and our team will get back to you within 24 hours.
                        </p>
                    </div>

                    <div className={styles.contactGrid}>
                        {/* LEFT: INFO */}
                        <div className={styles.infoCol}>
                            <motion.div
                                className={styles.infoItem}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.iconBox}><Mail size={24} /></div>
                                <div>
                                    <div className={styles.infoLabel}>Email Us</div>
                                    <div className={styles.infoValue}>hello@jobbeiai.com</div>
                                </div>
                            </motion.div>

                            <motion.div
                                className={styles.infoItem}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className={styles.iconBox}><Phone size={24} /></div>
                                <div>
                                    <div className={styles.infoLabel}>Call Us</div>
                                    <div className={styles.infoValue}>(555) 123-4567</div>
                                </div>
                            </motion.div>

                            <motion.div
                                className={styles.infoItem}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className={styles.iconBox}><MapPin size={24} /></div>
                                <div>
                                    <div className={styles.infoLabel}>Office</div>
                                    <div className={styles.infoValue}>123 Automation Way, <br />Austin, TX 78701</div>
                                </div>
                            </motion.div>

                            <div style={{ marginTop: 'auto', padding: '32px', background: '#F9FAFB', borderRadius: '24px', border: '1px solid #E5E7EB' }}>
                                <h4 style={{ fontWeight: 800, marginBottom: 12 }}>Trusted by Pros</h4>
                                <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                    Join 100+ home service businesses using JOBBEI AI to dominate their local markets.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: FORM */}
                        <motion.div
                            className={styles.formCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>First Name</label>
                                        <input 
                                            type="text" 
                                            className={styles.input} 
                                            placeholder="John"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Last Name</label>
                                        <input 
                                            type="text" 
                                            className={styles.input} 
                                            placeholder="Doe"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Business Email</label>
                                    <input 
                                        type="email" 
                                        className={styles.input} 
                                        placeholder="john@plumbing.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Business Name</label>
                                    <input 
                                        type="text" 
                                        className={styles.input} 
                                        placeholder="John's Plumbing"
                                        value={formData.businessName}
                                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Interested Product</label>
                                    <select 
                                        className={styles.input} 
                                        style={{ appearance: 'none' }}
                                        value={formData.interestedProduct}
                                        onChange={(e) => setFormData({...formData, interestedProduct: e.target.value})}
                                        required
                                    >
                                        <option>AI Call Agent</option>
                                        <option>Website Chat Agent</option>
                                        <option>SMS FAQ Agent</option>
                                        <option>Email Marketing Automation</option>
                                        <option>SMS Marketing Automation</option>
                                        <option>Full Automation Suite (Everything)</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>How can we help?</label>
                                    <textarea 
                                        className={styles.textarea} 
                                        placeholder="Tell us about your business and which AI agents you're interested in..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
