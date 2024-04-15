import "../styles/components/skills.scss";
import listSkillsFR from "../translation/fr/skills";
import listSkillsEN from "../translation/en/skills";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { ref: skillsRef, inView: isVisible } = useInView();
  const [t, i18n] = useTranslation("global");

  return (
    <section id="skills" ref={skillsRef}>
      <div className="skills">
        <h2 className={`main-title hidden ${isVisible ? "active" : ""}`}>
          {t("header.skills")}
        </h2>
        <div className={`container hidden ${isVisible ? "active" : ""}`}>
          {i18n.language === "fr"
            ? listSkillsFR.map((value) => (
                <div
                  className={`column hidden ${isVisible ? "active" : ""}`}
                  key={value.title}
                >
                  <h3 className="title">{value.title}</h3>
                  <ul className="uolist">
                    {Array.isArray(value.skills) ? (
                      value.skills.map((skill) => (
                        <li key={skill.name} className="list">
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="logo"
                            loading="lazy"
                          />{" "}
                          {skill.name}
                        </li>
                      ))
                    ) : (
                      <li className="list">
                        <img
                          src={value.skills.logo}
                          alt={`${value.skills.name} logo`}
                          className="logo"
                          loading="lazy"
                        />{" "}
                        {value.skills.name}
                      </li>
                    )}
                  </ul>
                </div>
              ))
            : listSkillsEN.map((value) => (
                <div
                  className={`column hidden ${isVisible ? "active" : ""}`}
                  key={value.title}
                >
                  <h3 className="title">{value.title}</h3>
                  <ul className="uolist">
                    {Array.isArray(value.skills) ? (
                      value.skills.map((skill) => (
                        <li key={skill.name} className="list">
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="logo"
                            loading="lazy"
                          />{" "}
                          {skill.name}
                        </li>
                      ))
                    ) : (
                      <li className="list">
                        <img
                          src={value.skills.logo}
                          alt={`${value.skills.name} logo`}
                          className="logo"
                          loading="lazy"
                        />{" "}
                        {value.skills.name}
                      </li>
                    )}
                  </ul>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
