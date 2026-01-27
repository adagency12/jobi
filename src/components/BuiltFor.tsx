import styles from './BuiltFor.module.css';

const industries = [
    { name: 'Pressure Washing', icon: '💧', feature: 'Quote by Sq Ft' },
    { name: 'Window Cleaning', icon: '🪟', feature: 'Pane Counting AI' },
    { name: 'Gutter Cleaning', icon: '🏠', feature: 'Linear Foot Pricing' },
    { name: 'House Washing', icon: '🏡', feature: 'Soft Wash Scheduling' },
    { name: 'Lawn Aeration', icon: '🌱', feature: 'Seasonal upsells' },
    { name: 'Holiday Lighting', icon: '✨', feature: 'Installation booking' },
    { name: 'Permanent LED', icon: '💡', feature: 'Commercial quotes' },
    { name: 'Landscape Lighting', icon: '🌳', feature: 'Maintenance plans' },
];

export default function BuiltFor() {
    // Duplicate list for infinite scroll
    const marqueeList = [...industries, ...industries, ...industries];

    return (
        <section className={styles.builtFor}>
            <div className={styles.label}>Engineered Specifically For</div>

            <div className={styles.marqueeContainer}>
                <div className={styles.track}>
                    {marqueeList.map((item, index) => (
                        <div key={`${item.name}-${index}`} className={styles.item}>
                            <span className={styles.icon}>{item.icon}</span>
                            <span className={styles.name}>{item.name}</span>
                            <div className={styles.hoverContent}>
                                {item.feature}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
