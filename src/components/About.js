import styles from './About.module.css';

export default function About() {
    return (
        <section id="about">
            <div className={`container ${styles.aboutSection}`}>
                <div className="section-header">
                    <h2 className="section-title">about</h2>
                    <p className="section-subtitle">
                    I build interesting things. 
                    Right now: I'm working as a SWE intern at SLB. 
                    Where: I've lived in three different countries across three continents; currently based in Durham, NC.
                    For fun: I rock climb, watch Formula 1, and play the piano.
                    </p>
                </div>
                <div className={styles.aboutText}>
                    {/* Add your about text here if needed */}
                </div>
            </div>
        </section>
    );
} 