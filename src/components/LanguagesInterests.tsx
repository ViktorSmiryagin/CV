import { Section } from "./Section/Section";
import styles from "./Section/Section.module.css";

export const LanguagesInterests = () => {
  return (
    <Section title="Языки и интересы" className={styles.section}>
      <div className={styles.content}>
        <p className={styles.infoItem}>
          🌍 <strong>Английский</strong> — B1 | <strong>Русский</strong> —
          Родной
        </p>
        <p className={styles.infoItem}>
          ❤️ <strong>Интересы:</strong> жена, кальянная сфера, книги и
          аудиокниги, путешествия.
        </p>
      </div>
    </Section>
  );
};
