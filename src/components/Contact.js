import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <div className={styles.contact}>
                    <h2 className="section-title">let's connect</h2>
                    <p className="section-subtitle">
                        Always open to discussing new opportunities, research collaborations, and interesting projects.
                    </p>
                    <form className={styles.contactForm}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: 420, margin: '0 auto', width: '100%' }}>
                            <input type="text" name="name" placeholder="Your Name" required style={{ padding: '0.7em', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1rem', fontFamily: 'inherit' }} />
                            <input type="email" name="email" placeholder="Your Email" required style={{ padding: '0.7em', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1rem', fontFamily: 'inherit' }} />
                            <textarea name="message" placeholder="Your Message" required rows={5} style={{ padding: '0.7em', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }} />
                            <button type="submit" style={{ padding: '0.7em', borderRadius: 8, background: 'var(--secondary-color)', color: '#fff', fontWeight: 600, fontSize: '1rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Send Message</button>
                        </div>
                    </form>
                    <a href="https://www.linkedin.com/in/amogh-manral-688736248/" className={styles.downloadResumeLink} download>
                        View Resume
                    </a>
                </div>
            </div>
        </section>
    );
} 