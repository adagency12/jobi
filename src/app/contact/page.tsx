'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import styles from './ContactPage.module.css';
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const N8N_WEBHOOK_URL = "https://n8n.srv1147675.hstgr.cloud/webhook/Jobbe";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        businessName: '',
        product: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    submittedAt: new Date().toISOString(),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setSubmitStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                businessName: '',
                product: '',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />
            <AnimatedBackground />

            <main className={styles.contactPage}>
                <div className={styles.container}>
                    <motion.div 
                        className={styles.header}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.badge}>Get in Touch</span>
                        <h1 className={styles.title}>Let's Scale Your Business.</h1>
                        <p className={styles.subtitle}>
                            Ready to stop missing calls and start booking more jobs? Send us a message and our team will get back to you within 24 hours.
                        </p>
                    </motion.div>

                    <div className={styles.content}>
                        {/* LEFT: INFO */}
                        <motion.div 
                            className={styles.infoSection}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className={styles.infoCard}>
                                <Mail className={styles.icon} />
                                <div>
                                    <h3>Email Us</h3>
                                    <p>hello@jobbeiai.com</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <Phone className={styles.icon} />
                                <div>
                                    <h3>Call Us</h3>
                                    <p>(555) 123-4567</p>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <MapPin className={styles.icon} />
                                <div>
                                    <h3>Office</h3>
                                    <p>123 Automation Way,<br />Austin, TX 78701</p>
                                </div>
                            </div>

                            <div className={styles.trustBadge}>
                                <h4>Trusted by Pros</h4>
                                <p>Join 100+ home service businesses using JOBBEI AI to dominate their local markets.</p>
                            </div>
                        </motion.div>

                        {/* RIGHT: FORM */}
                        <motion.div 
                            className={styles.formSection}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label>First Name</label>
                                        <input 
                                            type="text" 
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="John" 
                                            required 
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label>Last Name</label>
                                        <input 
                                            type="text" 
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Doe" 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label>Business Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@plumbing.com" 
                                        required 
                                    />
                                </div>

                                <div className={styles.field}>
                                    <label>Business Name</label>
                                    <input 
                                        type="text" 
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleChange}
                                        placeholder="Doe's Plumbing" 
                                        required 
                                    />
                                </div>

                                <div className={styles.field}>
                                    <label>Interested Product</label>
                                    <select 
                                        name="product"
                                        value={formData.product}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a product</option>
                                        <option value="AI Call Agent">AI Call Agent</option>
                                        <option value="Website Chat Agent">Website Chat Agent</option>
                                        <option value="SMS FAQ Agent">SMS FAQ Agent</option>
                                        <option value="Email Marketing Automation">Email Marketing Automation</option>
                                        <option value="SMS Marketing Automation">SMS Marketing Automation</option>
                                        <option value="Full Automation Suite">Full Automation Suite (Everything)</option>
                                    </select>
                                </div>

                                <div className={styles.field}>
                                    <label>How can we help?</label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your business needs..."
                                        rows={4}
                                        required
                                    />
                                </div>

                                {submitStatus === 'success' && (
                                    <div className={styles.successMessage}>
                                        Thank you! We'll get back to you within 24 hours.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className={styles.errorMessage}>
                                        Something went wrong. Please try again.
                                    </div>
                                )}

                                <button 
                                    type="submit" 
                                    className={styles.submitBtn}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={18} />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
