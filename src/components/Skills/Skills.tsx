import { Section } from "../Section/Section";
import { SkillItem, Skill } from "./SkillItem/SkillItem";
import styles from "../Section/Section.module.css";
import Jira from "../../assets/jira.jpg";
import Git from "../../assets/git.jpg";
import Qase from "../../assets/qase.jpg";
import DevTools from "../../assets/devTools.jpg";
import SQL from "../../assets/sql.jpg";
import CharlesProxy from "../../assets/charlesProxy.jpg";
import Swagger from "../../assets/swagger.jpg";
import Postman from "../../assets/postman.jpg";
import Docker from "../../assets/docker.jpg";
import Prisma from "../../assets/prisma.jpg";
import JMeter from "../../assets/jmeter.jpg";
import GraphQL from "../../assets/graphQL.jpg";
import WebSocketLogo from "../../assets/websocket.jpg";
import Kibana from "../../assets/kibana.jpg";

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillsData: SkillCategory[] = [
  {
    title: "Сильные",
    skills: [
      {
        name: "Jira",
        icon: Jira,
      },
      {
        name: "Git",
        icon: Git,
      },
      {
        name: "Qase.io",
        icon: Qase,
      },
      {
        name: "DevTools",
        icon: DevTools,
      },
    ],
  },
  {
    title: "Уверенные",
    skills: [
      {
        name: "Charles Proxy",
        icon: CharlesProxy,
      },
      {
        name: "SQL",
        icon: SQL,
      },
      {
        name: "Swagger",
        icon: Swagger,
      },
      {
        name: "Postman",
        icon: Postman,
      },

    ],
  },
  {
    title: "Базовые",
    skills: [
      {
        name: "PrismaSt",
        icon: Prisma,
      },
      {
        name: "Docker",
        icon: Docker,
      },
      {
        name: "JMeter",
        icon: JMeter,
      },
      {
        name: "GraphQL",
        icon: GraphQL,
      },
      {
        name: "WebSocket",
        icon: WebSocketLogo,
      },
      {
        name: "Kibana",
        icon: Kibana,
      },
    ],
  },
];

export const Skills = () => {
  return (
    <Section title="Навыки" className={styles.section}>
      <div className={styles.content}>
        {skillsData.map((category, index) => (
          <SkillItem
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </Section>
  );
};
