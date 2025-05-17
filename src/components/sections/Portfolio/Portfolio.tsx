import { Section } from "../../widgets/Section/Section";
import styles from "./Portfolio.module.css";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Quiz Mint AI",
    description: "利用 AI 生成考試題目的 Web 應用。",
    technologies: ["TypeScript", "Next.js", "OpenAI API", "Docker"],
    githubUrl: "https://github.com/oz841119/quiz-mint-ai",
    demoUrl: "https://quiz-mint-ai.vercel.app",
  },
  {
    title: "Catch Movie",
    description: "電影資訊追蹤應用，協助使用者記錄與追蹤想看的電影。",
    technologies: ["Vue.js", "JavaScript", "CSS"],
    githubUrl: "https://github.com/oz841119/catch-movie",
    demoUrl: "https://oz841119.github.io/catch-movie/"
  },
  {
    title: "Focus Muscle",
    description: "專注力訓練應用，透過科學方法提升注意力與工作效率。",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/oz841119/focus-muscle",
    demoUrl: "https://oz841119.github.io/focus-muscle/"
  }
];

export const Portfolio = () => {
  return (
    <Section title="作品集" id="portfolio" className="min-h-screen">
      <div className={styles.portfolioGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.projectLinks}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    DEMO
                  </a>
                )}
              </div>
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};