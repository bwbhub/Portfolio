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

function importAll(r) {
  return r.keys().map(r);
}
const imagesCineStation = importAll(
  require.context("../assets/cine-station", false, /\.(png|jpe?g|svg)$/),
);
const imagesBook = importAll(
  require.context("../assets/book", false, /\.(png|jpe?g|svg)$/),
);
const imagesPort = importAll(
  require.context("../assets/portfolio", false, /\.(png|jpe?g|svg)$/),
);

const listProject = [
  {
    title: "Cine-Station",
    des: "I made this cinema app to work on my skills. You can navigate through movies, tv shows, and actors. you can signup (no email required so you can test it now !), sign in, update your password, add movies and tv shows to your favorites and leave reviews, you can also navigate through your favorites list, and do the same for the reviews you left.",
    mission:
      "Full-stack project, create a server, develop an API and connect to MongoDB, create a securised authentification system with hashed password and token, API calls to get the movies/tv shows.",
    technologies: "MongoDB, Express, ReactJS, NodeJS",
    images: imagesCineStation,
    sourceCode: "https://github.com/bwbhub/cine-station",
    linkTo: "https://cine-station.vercel.app/",
  },
  {
    title: "Portfolio",
    des: "This is the website you are on, it was the last project I had to do during my learning. You can see the skills I acquired, the projects I worked on, download my resume and contact me by email !",
    mission:
      "I crafted this project from scratch. I created simple and reusable components that can be reintroduced into other projects with minimal changes.",
    technologies: "ReactJs",
    images: imagesPort,
    sourceCode: "https://github.com/bwbhub/Portfolio/tree/master",
  },
  {
    title: "Vieux grimoire",
    des: "This project was made during my time learning how to code. The owner of a few libraries wanted a website where users could add books and rate them.",
    mission:
      "Back-end developer, create an Express server, develop an API and connect to MongoDB, create a securised authentification system with hashed password and token.",
    technologies: "MongoDB, Express, Node.Js",
    images: imagesBook,
    sourceCode: "https://github.com/bwbhub/P7-Dev-Web-livres",
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
                <div className="header">
                  <h3>{value.title}</h3>
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
