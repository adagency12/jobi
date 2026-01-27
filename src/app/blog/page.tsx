'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import Link from 'next/link';
import styles from './BlogPage.module.css';

export default function BlogPage() {
    return (
        <main className={styles.page}>
            <Navbar />

            {/* HERO */}
            <section className={styles.hero}>
                <AnimatedBackground mode="container" />
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>The JOBBEI Blog</h1>
                    <p className={styles.heroSubtitle}>
                        Insights, guides, and news on AI automation for home service businesses.
                    </p>
                </div>
            </section>

            <div className={styles.container}>
                {/* FEATURED POST */}
                <div className={styles.featuredPost}>
                    <div className={styles.featuredImageWrapper}>
                        {/* Placeholder for featured image */}
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1F2933 0%, #00C2D1 100%)', opacity: 0.5 }}></div>
                    </div>
                    <div className={styles.featuredContent}>
                        <div className={styles.featuredBadge}>Featured Article</div>
                        <h2 className={styles.featuredTitle}>How AI is Revolutionizing the HVAC Industry</h2>
                        <p className={styles.featuredExcerpt}>
                            Discover how predictive maintenance, automated scheduling, and AI dispatching are helping HVAC companies increase revenue by 40% in 2024.
                        </p>
                        <Link href="#" className={styles.readMoreBtn}>Read Article</Link>
                    </div>
                </div>

                {/* BLOG GRID */}
                <div className={styles.blogGrid}>
                    {/* Article 1 */}
                    <Link href="#" className={styles.articleCard}>
                        <div className={styles.imageWrapper}>
                            <div style={{ width: '100%', height: '100%', background: '#E5E7EB' }}></div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.category}>Automation</div>
                            <h3 className={styles.title}>5 Signs Your Plumbing Business Needs an AI Receptionist</h3>
                            <p className={styles.excerpt}>Missed calls mean lost revenue. Here's how to know if manual dispatching is holding you back.</p>
                            <div className={styles.meta}>
                                <span className={styles.author}>Sarah Johnson</span>
                                <span>5 min read</span>
                            </div>
                        </div>
                    </Link>

                    {/* Article 2 */}
                    <Link href="#" className={styles.articleCard}>
                        <div className={styles.imageWrapper}>
                            <div style={{ width: '100%', height: '100%', background: '#D1D5DB' }}></div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.category}>Growth</div>
                            <h3 className={styles.title}>The Ultimate Guide to Local SEO for Electricians</h3>
                            <p className={styles.excerpt}>Rank higher on Google Maps and capture more local leads with these proven strategies.</p>
                            <div className={styles.meta}>
                                <span className={styles.author}>Mike Peters</span>
                                <span>8 min read</span>
                            </div>
                        </div>
                    </Link>

                    {/* Article 3 */}
                    <Link href="#" className={styles.articleCard}>
                        <div className={styles.imageWrapper}>
                            <div style={{ width: '100%', height: '100%', background: '#9CA3AF' }}></div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.category}>Case Study</div>
                            <h3 className={styles.title}>How GreenThumb Landscaping Saved 20 Hours/Week</h3>
                            <p className={styles.excerpt}>A deep dive into how automating follow-ups transformed their operational efficiency.</p>
                            <div className={styles.meta}>
                                <span className={styles.author}>David Chen</span>
                                <span>6 min read</span>
                            </div>
                        </div>
                    </Link>

                    {/* Article 4 */}
                    <Link href="#" className={styles.articleCard}>
                        <div className={styles.imageWrapper}>
                            <div style={{ width: '100%', height: '100%', background: '#E5E7EB' }}></div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.category}>Technology</div>
                            <h3 className={styles.title}>Understanding Voice AI Latency: What It Means for You</h3>
                            <p className={styles.excerpt}>Why speed matters when an AI answers your customer calls, and how we optimized it.</p>
                            <div className={styles.meta}>
                                <span className={styles.author}>Team JOBBEI</span>
                                <span>4 min read</span>
                            </div>
                        </div>
                    </Link>

                    {/* Article 5 */}
                    <Link href="#" className={styles.articleCard}>
                        <div className={styles.imageWrapper}>
                            <div style={{ width: '100%', height: '100%', background: '#D1D5DB' }}></div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.category}>Customer Experience</div>
                            <h3 className={styles.title}>Why Retaining Customers is Cheaper Than Acquiring New Ones</h3>
                            <p className={styles.excerpt}>Leveraging automated SMS campaigns to keep your existing client base engaged.</p>
                            <div className={styles.meta}>
                                <span className={styles.author}>Sarah Johnson</span>
                                <span>5 min read</span>
                            </div>
                        </div>
                    </Link>

                    {/* Article 6 */}
                    <Link href="#" className={styles.articleCard}>
                        <div className={styles.imageWrapper}>
                            <div style={{ width: '100%', height: '100%', background: '#9CA3AF' }}></div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.category}>News</div>
                            <h3 className={styles.title}>JOBBEI AI Raises Seed Round to Expand Home Service Automation</h3>
                            <p className={styles.excerpt}>We're excited to announce our latest funding round led by top industry investors.</p>
                            <div className={styles.meta}>
                                <span className={styles.author}>Press Team</span>
                                <span>3 min read</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
