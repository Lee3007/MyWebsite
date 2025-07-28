import tiktaktoePreview from "../assets/reposPreview/tiktaktoePreview.png";
import snakePreview from "../assets/reposPreview/snakePreview.gif";
import websitePreview from "../assets/reposPreview/websitePreview.png";
import magicGolemsPreview from "../assets/reposPreview/magicGolemsPreview.png";
import cicloHamiltPreview from "../assets/reposPreview/cicloHamiltPreview.png";

export const SKILLS = {
  frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "React Native",
    "Tailwind CSS",
    "Material UI",
  ],
  backend: ["Node.js", "Express", "NestJS", "Microservices"],
  database: ["PostgreSQL", "SQL", "NoSQL"],
  tools: ["Git", "Docker", "AWS", "Elasticsearch", "Zustand"],
};

export const CONTACT_LINKS = {
  email: "felipe.lee30@gmail.com", // Please update with your email
  linkedin: "https://www.linkedin.com/in/felipelee30/", // Please update with your LinkedIn
  github: "https://github.com/lee3007", // Based on your homepage URL
};

export const PROJECTS_DATA = [
  {
    id: "tictactoe",
    image: tiktaktoePreview,
    githubUrl: "https://github.com/lee3007/TicTacToe_JS",
  },
  {
    id: "snake",
    image: snakePreview,
    githubUrl: "https://github.com/lee3007/Snake_JS",
  },
  {
    id: "website",
    image: websitePreview,
    githubUrl: "https://github.com/lee3007/MyWebsite",
    liveUrl: "https://lee3007.github.io/MyWebsite",
  },
  {
    id: "magic",
    image: magicGolemsPreview,
    githubUrl: "https://github.com/lee3007/Magic_Golems",
  },
  {
    id: "hamiltonian",
    image: cicloHamiltPreview,
    githubUrl: "https://github.com/lee3007/Hamiltonian_Cycle",
  },
  {
    id: "microprocessor",
    githubUrl: "https://github.com/lee3007/micro-processor",
  },
];
