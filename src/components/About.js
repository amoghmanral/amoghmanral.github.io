import styles from './About.module.css';

export default function About() {
    return (
        <section id="about">
            <div className={`container ${styles.aboutSection}`}>
                <div className="section-header">
                    <h2 className="section-title">about</h2>
                    <p className="section-subtitle">
                        I build cool things. Currently working as a SWE intern. 

                    </p>
                </div>
                <div className={styles.aboutText}>
                    {/* Add your about text here if needed */}
                </div>
            </div>
        </section>
    );
} 