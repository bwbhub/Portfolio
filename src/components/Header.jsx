import { useTranslation } from "react-i18next";
import "../styles/components/header.scss";

export default function Header() {
  const [t] = useTranslation("global");

  return (
    <header>
      <p className="header-title">BWB</p>
      <nav>
        <ul className="header-nav">
          <li
            className="header-nav-link"
            onClick={() => {
              const skills = document.getElementById("skills");
              skills?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {t("header.skills")}
          </li>
          <li
            className="header-nav-link"
            onClick={() => {
              const projects = document.getElementById("projects");
              projects?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {t("header.projects")}
          </li>
          <li
            className="header-nav-link"
            onClick={() => {
              const contact = document.getElementById("contact");
              contact?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {t("header.contact")}
          </li>
        </ul>
      </nav>
    </header>
  );
}
