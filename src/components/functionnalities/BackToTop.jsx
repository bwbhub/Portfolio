import "../../styles/components/fonctionnalities/backtotop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTop({ isVisible }) {
  return (
    <div>
      <button
        id="back-to-top"
        className={`main-title hidden ${isVisible ? "active" : ""}`}
        aria-label="Back to top"
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      ;
    </div>
  );
}
