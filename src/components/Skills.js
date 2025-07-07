import styles from './Skills.module.css';
import { FaPython, FaAngular, FaReact, FaJava, FaNodeJs, FaDocker, FaGitAlt, FaLinux, FaHtml5, FaCss3} from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiCplusplus, SiR, SiVercel, SiFastapi, SiGooglecloud, SiFlask, SiSwagger, SiTensorflow, SiScikitlearn, SiPytorch, SiPandas} from 'react-icons/si';
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";


const techCategories = [
    {
        category: 'Programming Languages',
        techs: [
            { icon: <FaPython />, name: 'Python' },
            { icon: <FaJava />, name: 'Java' },
            { icon: <SiCplusplus />, name: 'C++' },
            { icon: <SiJavascript />, name: 'JavaScript' },
            { icon: <SiTypescript />, name: 'TypeScript' },
            { icon: <SiR />, name: 'R' },
        ]
    },
    {
        category: 'Frontend Development',
        techs: [
            { icon: <FaHtml5 />, name: 'HTML' },
            { icon: <FaCss3 />, name: 'CSS' },
            { icon: <FaReact />, name: 'React' },
            { icon: <TbBrandNextjs />, name: 'Next.js' },
            { icon: <FaAngular />, name: 'Angular' },
        ]
    },
    {
        category: 'Backend Development',
        techs: [
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <SiFastapi />, name: 'FastAPI' },
            { icon: <SiFlask />, name: 'Flask' },
            { icon: <SiSwagger />, name: 'Swagger' },
        ]
    },
    {
        category: 'Machine Learning',
        techs: [
            { icon: <SiTensorflow />, name: 'TensorFlow' },
            { icon: <SiScikitlearn />, name: 'Scikit-learn' },
            { icon: <SiPytorch />, name: 'PyTorch' },
            { icon: <SiPandas />, name: 'Pandas' },
        ]
    },
    {
        category: 'Deployment & Cloud',
        techs: [
            { icon: <FaDocker />, name: 'Docker' },
            { icon: <VscAzureDevops />, name: 'Azure DevOps' },
            { icon: <SiGooglecloud />, name: 'Google Cloud' },
            { icon: <FaLinux />, name: 'Linux' },
            { icon: <FaGitAlt />, name: 'Git' },
            { icon: <SiVercel />, name: 'Vercel' },
        ]
    },
];

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">skills and technologies</h2>
                </div>
                <div className={styles.techTable}>
                    <div className={styles.techTableHeader}>
                        <span className={styles.techCategoryHeader}>category</span>
                        <span className={styles.techTechHeader}>technologies</span>
                    </div>
                    {techCategories.map((cat, idx) => (
                        <div className={styles.techTableRow} key={cat.category}>
                            <span className={styles.techCategory}>{cat.category}</span>
                            <span className={styles.techIcons}>
                                {cat.techs.map((tech, tIdx) => (
                                    <span className={styles.techIconWrapper} data-tooltip={tech.name} key={tIdx}>
                                        <span className={styles.techIconLarge}>{tech.icon}</span>
                                    </span>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 