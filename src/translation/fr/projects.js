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

const listProjectFR = [
  {
    title: "Cine-Station",
    des: "C'est un projet Full-stack que j'ai réalisé en utilisant MERN. Le nom parle de lui-même, c'est une application de cinéma où vous pouvez parcourir des films, des séries télévisées et des acteurs. Vous pouvez créer un compte sans e-mail si vous souhaitez les fonctionnalités utilisateur telles que la mise à jour de votre mot de passe, l'ajout d'éléments à vos favoris, laisser des critiques et vérifier les listes de vos favoris et les critiques que vous avez laissées.",
    mission:
      "Projet Full-stack : Créer un serveur, développer une API et se connecter à MongoDB, créer un système d'authentification sécurisé avec des mots de passe hashés et des jetons, appels API pour obtenir les films/séries télévisées.",
    technologies: "MongoDB, Express, ReactJS, NodeJS",
    images: imagesCineStation,
    sourceCode: "https://github.com/bwbhub/cine-station",
    linkTo: "https://cine-station.vercel.app/",
  },
  {
    title: "Portfolio",
    des: "C'est le site web sur lequel vous vous trouvez, c'était le dernier projet que j'avais à faire pendant mon apprentissage. Vous pouvez voir les compétences que j'ai acquises, les projets sur lesquels j'ai travaillé, télécharger mon CV et me contacter par e-mail !",
    mission:
      "J'ai conçu ce projet de A à Z. J'ai créé des composants simples et réutilisables qui peuvent être réintroduits dans d'autres projets avec des modifications minimales.",
    technologies: "ReactJs",
    images: imagesPort,
    sourceCode: "https://github.com/bwbhub/Portfolio/tree/master",
  },
  {
    title: "Vieux grimoire",
    des: "Ce projet a été réalisé pendant mon apprentissage du codage. Le propriétaire de quelques bibliothèques voulait un site web où les utilisateurs pourraient ajouter des livres et les évaluer.",
    mission:
      "Développeur back-end, créer un serveur Express, développer une API et se connecter à MongoDB, créer un système d'authentification sécurisé avec des mots de passe hashés et des jetons.",
    technologies: "MongoDB, Express, Node.Js",
    images: imagesBook,
    sourceCode: "https://github.com/bwbhub/P7-Dev-Web-livres",
  },
];

export default listProjectFR;
