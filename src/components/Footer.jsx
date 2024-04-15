import "../styles/components/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t] = useTranslation("global");

  return (
    <footer>
      <hr />
      <p className="text">
        {t("footer.text")} <br />
        <br />
        <FontAwesomeIcon icon={faCopyright} /> Copyright 2024 - Brice Bouhot
      </p>
      <a
        href="https://github.com/bwbhub/Portfolio/tree/master"
        className="tag"
        target="blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FontAwesomeIcon icon={faCode} />
        <span>{t("footer.code")}</span>
      </a>
    </footer>
  );
}
