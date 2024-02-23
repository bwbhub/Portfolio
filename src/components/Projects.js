import "../styles/components/projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import BackToTop from "./functionnalities/BackToTop";
import Carousel from "./functionnalities/Carousel";

function importAll(r) {
  return r.keys().map(r);
}
const imagesKasa = importAll(
  require.context("../assets/kasa", false, /\.(png|jpe?g|svg)$/),
);
const imagesBook = importAll(
  require.context("../assets/book", false, /\.(png|jpe?g|svg)$/),
);
const imagesPort = importAll(
  require.context("../assets/portfolio", false, /\.(png|jpe?g|svg)$/),
);

const listProject = [
  {
    title: "Portfolio",
    des: "This is the website you are on, it was the last project I had to do during my learning",
    mission:
      "I crafted this project from scratch. I created simple and reusable components that can be reintroduced into other projects with minimal changes.",
    technologies: "ReactJs",
    images: imagesPort,
  },
  {
    title: "Kasa-Immobilier",
    des: "This project was made during my time learning how to code. The CTO of this real estate rental agency wanted the entire website remodeled.",
    mission:
      "Front-end developer, create reusable ReactJs components, following a Figma model",
    technologies: "ReactJs",
    images: imagesKasa,
  },
  {
    title: "Vieux grimoire",
    des: "This project was made during my time learning how to code. The owner of a few libraries wanted a website where users could add books and rate them.",
    mission:
      "Back-end developer, create an Express server, develop an API and connect to MongoDB, create a securised authentification system with hashed password and token",
    technologies: "Express, Node.Js, MongoDB",
    images: imagesBook,
  },
];

export default function Projects() {
  const { ref: projectsRef, inView: isVisible } = useInView();

  return (
    <section id="projects" ref={projectsRef}>
      <div className={`projects hidden ${isVisible ? "active" : ""}`}>
        <h2 className="main-title">Projects</h2>
        <div className="container">
          {listProject.map((value, key) => (
            <div
              key={key}
              className={`project hidden ${isVisible ? "active" : ""}`}
            >
              <Carousel picture={value.images} />
              <div className="content">
                <h3>{value.title}</h3>
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
