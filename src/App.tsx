import { Header } from "./components/Header/Header";
import { ContactInfo } from "./components/ContactInfo";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects";
import { LanguagesInterests } from "./components/LanguagesInterests";
import styles from "./styles/App.module.css";

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.container}>
        <ContactInfo />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <LanguagesInterests />
      </div>
    </div>
  );
};
