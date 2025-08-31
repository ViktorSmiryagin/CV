import styles from "./Header.module.css";
import profilePhoto from "../../assets/img/pfofilePhoto.jpg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={profilePhoto} alt="profile photo" className={styles.avatar} />
      <h1 className={styles.title}>Виктор Смирягин</h1>
      <p className={styles.subtitle}>QA-инженер | Ручное тестирование</p>
    </header>
  );
};
