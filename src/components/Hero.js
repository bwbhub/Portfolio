import "../styles/components/hero.scss";
import photo from "../assets/photo1.webp";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import resume from "../assets/Brice_Bouhot_CV.pdf";

export default function Hero() {
  const { ref: heroRef, inView: isVisible } = useInView();
  return (
    <section id="hero" ref={heroRef}>
      <div className={`hero hidden ${isVisible ? "active" : ""}`}>
        <div className={`left-container hidden ${isVisible ? "active" : ""}`}>
          <h1 className={`title hidden ${isVisible ? "active" : ""}`}>
            Hi, I'm Brice
          </h1>
          <h2 className={`title-nd hidden ${isVisible ? "active" : ""}`}>
            Web Developer
          </h2>
          <div className={`social hidden ${isVisible ? "active" : ""}`}>
            <a
              href="https://github.com/bwbhub"
              className="tag"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/brice-bouhot-185068283/"
              className="tag"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a
              href={resume}
              target="blank"
              rel="noopener noreferrer"
              download={resume}
              className="tag"
            >
              <FontAwesomeIcon icon={faFile} />
              <span>Resume</span>
            </a>
            <button
              className="tag"
              onClick={() => {
                const contact = document.getElementById("contact");
                contact?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email me</span>
            </button>
          </div>
        </div>
        <div className={`right-container hidden ${isVisible ? "active" : ""}`}>
          <img src={photo} alt="Me" className="photo" />
        </div>
      </div>
    </section>
  );
}
