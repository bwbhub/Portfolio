import "../styles/components/header.scss";

export default function Header() {
  return (
    <header>
      <p className="header-title">BWB</p>
      <nav>
        <ul className="header-nav">
          <li
            className="header-nav-link"
            onClick={() => {
              const hero = document.getElementById("hero");
              hero?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Home
          </li>
          <li
            className="header-nav-link"
            onClick={() => {
              const skills = document.getElementById("skills");
              skills?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Skills
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
            Projects
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
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}
