import "../styles/components/projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmerica,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import BackToTop from "./functionnalities/BackToTop";
import Carousel from "./functionnalities/Carousel";
import { useTranslation } from "react-i18next";
import listProjectEN from "../translation/en/projects";
import listProjectFR from "../translation/fr/projects";

export default function Projects() {
  const { ref: projectsRef, inView: isVisible } = useInView();
  const [t, i18n] = useTranslation("global");

  return (
    <section id="projects" ref={projectsRef}>
      <div className={`projects hidden ${isVisible ? "active" : ""}`}>
        <h2 className="main-title">{t("header.projects")}</h2>
        <div className="container">
          {i18n.language === "fr"
            ? listProjectFR.map((value, key) => (
                <div
                  key={key}
                  className={`project hidden ${isVisible ? "active" : ""}`}
                >
                  <Carousel picture={value.images} />

                  <div className="content">
                    <div className="header">
                      <h3>{value.title}</h3>
                      {value.linkTo ? (
                        <a
                          href={value.linkTo}
                          className="tag"
                          target="blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <FontAwesomeIcon icon={faCode} />
                          <span>Visit</span>
                        </a>
                      ) : null}
                      <a
                        href={value.sourceCode}
                        className="tag"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <FontAwesomeIcon icon={faCode} />
                        <span>Code source</span>
                      </a>
                    </div>
                    <div className="des">{value.des}</div>
                    <div className="mission">
                      <div>
                        <FontAwesomeIcon icon={faPersonCircleQuestion} />
                      </div>
                      <div>
                        <h4 className="title">Mission</h4>
                        {value.mission}
                      </div>
                    </div>
                    <div className="mission">
                      <div>
                        <FontAwesomeIcon icon={faEarthAmerica} />
                      </div>
                      <div>
                        <h4 className="title">Technologies</h4>
                        {value.technologies}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : listProjectEN.map((value, key) => (
                <div
                  key={key}
                  className={`project hidden ${isVisible ? "active" : ""}`}
                >
                  <Carousel picture={value.images} />

                  <div className="content">
                    <div className="header">
                      <h3>{value.title}</h3>
                      {value.linkTo ? (
                        <a
                          href={value.linkTo}
                          className="tag"
                          target="blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <FontAwesomeIcon icon={faCode} />
                          <span>Visit</span>
                        </a>
                      ) : null}
                      <a
                        href={value.sourceCode}
                        className="tag"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <FontAwesomeIcon icon={faCode} />
                        <span>Source code</span>
                      </a>
                    </div>
                    <div className="des">{value.des}</div>
                    <div className="mission">
                      <div>
                        <FontAwesomeIcon icon={faPersonCircleQuestion} />
                      </div>
                      <div>
                        <h4 className="title">Mission</h4>
                        {value.mission}
                      </div>
                    </div>
                    <div className="mission">
                      <div>
                        <FontAwesomeIcon icon={faEarthAmerica} />
                      </div>
                      <div>
                        <h4 className="title">Technologies</h4>
                        {value.technologies}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <BackToTop isVisible={isVisible} />
    </section>
  );
}
