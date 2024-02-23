import "../styles/components/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer>
      <hr />
      <p className="text">
        Designed and built by Brice Bouhot <br />
        <br />
        <FontAwesomeIcon icon={faCopyright} /> Copyright 2024 - Brice Bouhot
      </p>
    </footer>
  );
}
