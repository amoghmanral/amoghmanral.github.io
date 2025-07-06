import styles from './Projects.module.css';

export default function Projects() {
    const projects = [
        {
            title: "Full-Stack EdTech Platform",
            image: "/nabn.png",
            period: "October 2024 – May 2025",
            description: "Developed a comprehensive web platform for NABN (a nonprofit organization) supporting 1,000+ adolescents with access to events, resources, and donation channels.",
            tech: ["React", "Vite", "CMS", "SEO"],
            links: [
                { text: "Live Demo →", href: "https://nabnnepal.org/" },
                { text: "GitHub →", href: "https://github.com/amoghmanral/NABN_frontend" }
            ]
        },
        {
            title: "3D Maze Solver",
            image: "/maze.png",
            period: "May 2025",
            description: "Implemented real-time 3D rendering with React + WebGL, enabling users to rotate, zoom, and explore maze environments with 1M+ data points fluidly.",
            tech: ["React", "Three.js", "JavaScript", "Tailwind CSS"],
            links: [
                { text: "Live Demo →", href: "https://3d-maze-solver.vercel.app/" },
                { text: "GitHub →", href: "https://github.com/amoghmanral/3DMazeSolver" }
            ]
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">featured projects</h2>
                </div>
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <img src={project.image} alt={project.title} className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitle}>{project.title}</div>
                                <div className={styles.cardDescription}>{project.description}</div>
                                <div className={styles.cardFooter}>
                                    <div className={styles.cardTags}>
                                        {project.tech.map((tag, i) => (
                                            <span key={i} className={styles.cardTag}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className={styles.cardLinks}>
                                        {project.links.map((link, i) => (
                                            <a key={i} href={link.href} className={styles.cardLink} target="_blank" rel="noopener noreferrer">{link.text}</a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 