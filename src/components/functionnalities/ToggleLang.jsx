import { useTranslation } from "react-i18next";
import "../../styles/components/fonctionnalities/togglelang.scss";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const ToggleLang = () => {
  const { i18n } = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="toggle">
      <button
        onClick={() =>
          handleChangeLanguage(i18n.language === "fr" ? "en" : "fr")
        }
        className="btn"
      >
        {i18n.language === "fr" ? (
          <span className="fi fi-gb fis"></span>
        ) : (
          <span className="fi fi-fr fis"></span>
        )}
      </button>
    </div>
  );
};

export default ToggleLang;
