import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.heroImage}>
                        <img src="/me.png" alt="Amogh Manral" />
                    </div>
                    <h1 className={styles.heroTitle}>Amogh Manral</h1>
                    <p className={styles.heroSubtitle}>CS sophomore @ Duke University<br />AI/ML • Full-Stack Development • Research</p>
                    <div className={styles.heroLinks}>
                        <a href="mailto:am1153@duke.edu" className={styles.heroLink}>email</a>
                        <a href="https://github.com/amoghmanral" className={styles.heroLink}>github</a>
                        <a href="https://linkedin.com/in/amogh-manral-688736248/" className={styles.heroLink}>linkedin</a>
                    </div>
                </div>
            </div>
        </section>
    );
} 