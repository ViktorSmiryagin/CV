import { Section } from "./Section/Section";
import styles from "./Section/Section.module.css";

export const Experience = () => {
  return (
    <Section title="Опыт работы" className={styles.section}>
      <div className={styles.content}>
        <ul>
          <li>
            <strong>IT-INCUBATOR (ноябрь 2024 | настоящее время)</strong>
            <ul>
              <li>
                <u>Функции:</u> анализ и уточнение требований, составление и
                обновление тест-кейсов и чек-листов, тестирование веб-приложения
                и backend, API-тестирование (REST, GraphQL), проведение
                регрессионного, функционального и исследовательского
                тестирования.
              </li>
              <li>
                <u>Достижения:</u> предотвратил реализацию некорректной
                бизнес-логики, выявив ошибки и пробелы в требованиях до начала
                разработки; участвовал в прояснении требований и формировании
                тестируемых условий; устранил критические баги до релиза,
                повысил читаемость баг-репортов благодаря унификации структуры.
              </li>
              <li>
                <u>Инструменты:</u> Swagger UI, DevTools, GraphQL Playground,
                Prisma Studio, Jira, Qase, Notion.
              </li>
            </ul>
          </li>
          <li>
            <strong>Металлсервис (2022 | 2023)</strong>
          </li>
          <li>
            <strong>Европро (2021 | 2022)</strong>
          </li>
        </ul>
      </div>
    </Section>
  );
};
