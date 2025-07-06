export default function Experience() {
    const experiences = [
        {
            date: "June – August 2025",
            title: "Software Engineering Intern",
            company: "Schlumberger (SLB) • Montpellier, France",
            description: "Incoming full-stack engineer focused on Python/Angular development and CI/CD processes. Will work on enterprise-level software solutions for the energy sector."
        },
        {
            date: "September 2024 – Present",
            title: "Undergraduate Research Assistant",
            company: "Duke University, Kenan Institute • Durham, NC",
            description: "Led data cleaning and analysis for research projects, improving throughput of data processing by 50% using Python scripts and Java tooling. Automated administrative workflows, saving team 4+ hours/week on repetitive tasks."
        },
        {
            date: "2022",
            title: "2nd Place, Open Data Hackathon",
            company: "University of Stavanger",
            description: "Developed digital water meter system and prototype app to reduce city waste by estimated 40%. Collaborated with team to create innovative IoT solution for environmental sustainability."
        }
    ];

    return (
        <section id="experience">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">Professional experience and research work.</p>
                </div>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-date">{exp.date}</div>
                            <div className="timeline-content">
                                <h3>{exp.title}</h3>
                                <div className="timeline-company">{exp.company}</div>
                                <p className="timeline-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 