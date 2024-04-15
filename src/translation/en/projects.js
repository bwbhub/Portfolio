function importAll(r) {
  return r.keys().map(r);
}
const imagesCineStation = importAll(
  require.context("../../assets/cine-station", false, /\.(png|jpe?g|svg)$/),
);
const imagesBook = importAll(
  require.context("../../assets/book", false, /\.(png|jpe?g|svg)$/),
);
const imagesPort = importAll(
  require.context("../../assets/portfolio", false, /\.(png|jpe?g|svg)$/),
);

const listProjectEN = [
  {
    title: "Cine-Station",
    des: "This is a Full-stack project I made using MERN. The name speaks for itself, its a cinema app where you can browse through movies, tv shows, and actors. You can create an account without an email if you want the user functionnalities such as updating your password, adding stuff to your favorites leaving reviews, and checking the lists of your favorites and the reviews you left.",
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

export default listProjectEN;
