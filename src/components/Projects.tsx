import { Section } from "./Section/Section";
import styles from "./Section/Section.module.css";

export const Projects = () => {
  const projects = [
    {
      name: "E-commerce Website Testing",
      url: "https://github.com/ViktorSmiryagin/qa-engineer-project-84",
    },
    {
      name: "Project: Testing the CodeBattle Web Application in Production",
      url: "https://github.com/ViktorSmiryagin/qa-engineer-project-85",
    },
    {
      name: "Participation in open-source project RunIT",
      url: "https://github.com/ViktorSmiryagin/Test_Runit",
    },
    {
      name: "PetProject (StoreSystem)",
      url: "https://github.com/ViktorSmiryagin/StoreSystem/tree/main",
    },
  ];

  return (
    <Section title="Проекты" className={styles.section}>
      <div className={styles.content}>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
