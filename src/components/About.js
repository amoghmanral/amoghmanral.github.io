import styles from './About.module.css';

export default function About() {
    return (
        <section id="about">
            <div className={`container ${styles.aboutSection}`}>
                <div className="section-header">
                    <h2 className="section-title">about</h2>
                    <p className="section-subtitle">
                        I build interesting things. Currently working as a SWE intern at SLB. When I'm not busy with that, I watch Formula 1, go rock climbing, or play piano.

                    </p>
                </div>
                <div className={styles.aboutText}>
                    {/* Add your about text here if needed */}
                </div>
            </div>
        </section>
    );
} 