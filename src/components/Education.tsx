import { Section } from "./Section/Section";
import styles from "./Section/Section.module.css";

export const Education = () => {
  return (
    <Section title="Образование и курсы" className={styles.section}>
      <div className={styles.content}>
        <ul>
          <li>
            🎓{" "}
            <a
              href="https://i.ibb.co/WfG1nGy/hexlet-certificate.png"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Hexlet — Инженер по тестированию ПО (2024)
            </a>
          </li>
          <li>
            🎓 Stepik —{" "}
            <a
              href="https://stepik.org/cert/2600612"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              JMeter
            </a>
            ,{" "}
            <a
              href="https://stepik.org/cert/2613394"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              SQL+Python
            </a>{" "}
            (2024)
          </li>
          <li>
            🎓{" "}
            <a
              href="https://drive.google.com/file/d/1EvggD_y5lG6AycZS6EGKIMM8TYrz2QgR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Интенсив «Программа мобильного тестирования» (2025)
            </a>
          </li>
          <li>🎓 Печорское речное училище — Техник-судоводитель (2017)</li>
        </ul>
      </div>
    </Section>

  );
};
