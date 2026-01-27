import styles from './ServicesGrid.module.css';

// Custom SVG Icons (Lucide-style)
const Icons = {
    PressureWashing: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
    ),
    WindowCleaning: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
    ),
    GutterCleaning: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
            <path d="M3 3h18v4H3z" />
            <path d="M12 7v10" />
            <path d="M9 17l3 3 3-3" />
        </svg>
    ),
    HouseWashing: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    ),
    LawnAeration: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-7-1.9 3.1-3 5-3 7 0 3.9-4 3.9-4-1 0-3.1-1-5-3-7-1.9 3.1-3 5-3 7a7 7 0 0 0 7 7z" />
        </svg>
    ),
    HolidayLighting: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    ),
    PermanentLED: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <path d="M12 2a7 7 0 0 0-7 7c0 3.1 1.2 4.1 2.5 6h9c1.3-1.9 2.5-2.9 2.5-6a7 7 0 0 0-7-7z" />
        </svg>
    ),
    LandscapeLighting: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
            <path d="M12 22v-8" />
            <path d="M5 14h14" />
            <path d="M5 8l7-6 7 6" />
        </svg>
    )
};

const services = [
    { name: 'Pressure Washing', icon: Icons.PressureWashing },
    { name: 'Window Cleaning', icon: Icons.WindowCleaning },
    { name: 'Gutter Cleaning', icon: Icons.GutterCleaning },
    { name: 'House Washing', icon: Icons.HouseWashing },
    { name: 'Lawn Aeration', icon: Icons.LawnAeration },
    { name: 'Holiday Lighting', icon: Icons.HolidayLighting },
    { name: 'Permanent LED', icon: Icons.PermanentLED },
    { name: 'Landscape Lighting', icon: Icons.LandscapeLighting },
];

export default function ServicesGrid() {
    return (
        <section className={styles.servicesGrid}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>All Your Services. One AI System.</h2>
                    <p className={styles.subtitle}>JOBBEI is pre-trained on the specific needs, pricing, and questions for every major home service.</p>
                </div>
                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.name} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <service.icon />
                            </div>
                            <h3 className={styles.serviceName}>{service.name}</h3>
                            <p className={styles.flow}>Call → AI → Jobber → SMS</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
