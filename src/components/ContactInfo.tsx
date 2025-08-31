import { Section } from "./Section/Section";
import styles from "./Section/Section.module.css";

export const ContactInfo = () => {
  return (
    <Section title="Контакты" className={styles.section}>
      <div className={styles.content}>
        <p>
          <span>
            📧{" "}
            <a href="mailto:smiryaginviktorwtj@gmail.com">
              smiryaginviktorwtj@gmail.com
            </a>
          </span>
          <span>
            📞 <a href="tel:+40786018293">+40 786 018 293</a>
          </span>
        </p>

        <p>
          <span>
            🔗{" "}
            <a
              href="https://github.com/ViktorSmiryagin"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
          <span>
            🧵{" "}
            <a
              href="https://t.me/EA7Owner"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </span>
          <span className={styles.location}>🇷🇴 Румыния | 🇷🇺 Россия</span>
        </p>
      </div>
    </Section>
  );
};
