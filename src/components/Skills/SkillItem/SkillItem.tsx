import styles from "./SkillItem.module.css";

export type Skill = {
  name: string;
  icon: string;
};

type SkillItemProps = {
  title: string;
  skills: Skill[];
};

export const SkillItem = ({ title, skills }: SkillItemProps) => {
  return (
    <div className={styles.skillCategory}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.skills}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <img src={skill.icon} alt={skill.name} className={styles.icon} />
            <span className={styles.name}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
