import styles from "./Section.module.css";
import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
};

export const Section = ({ title, children, className = "" }: SectionProps) => {
  return (
    <section className={`${styles.section} ${className}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
