import event from "../assets/event.png";
import travel from "../assets/travel-website.png";
import product from "../assets/product-store.png";
import finance from "../assets/finance-app.png";
import food from "../assets/food-app.png";
import movie from "../assets/movie.png";

// Individual Project Card Component

export const projects = [
  {
    id: 1,
    title: "Event App",
    description:
      "An event app that lets search various music events in seattle",
    image: event,
    technologies: ["React", "Node.js", "MongoDB", "Tailwind", "NextJS"],
    color: "#3b82f6",
    status: "Completed",
    date: "Feb 2025",
    type: "Frontend Stack",
    live: "https://event-project-three.vercel.app/",
    github: "https://github.com/cobrakai3005/Event_Project",
  },
  {
    id: 2,
    title: "Product Store",
    description:
      "A CRUD app with backend which lets you create, read, update and delete products.",
    image: product,
    technologies: ["React", "API Integration", "MONGODB", "EXPRESS"],
    color: "#10b981",
    status: "Completed",
    date: "Nov 2024",
    type: "Full Stack MERN",
    live: "https://product-store-6g75.onrender.com/",
    github: "https://github.com/cobrakai3005/product-store",
  },
  {
    id: 3,
    title: "A Food Store app",
    description:
      "A  food Website frontend application made with react and tailwind css full responsive.",
    image: food,
    technologies: ["React", "CSS", "Tailwindcss"],
    color: "#8b5cf6",
    status: "In Progress",
    date: "Jan 2025",
    type: "Frontend",
    live: "https://foodwebsites.vercel.app/",
    github: "https://foodwebsites.vercel.app/",
  },
  {
    id: 4,
    title: "A Travel Website",
    description:
      "A  Travel Website frontend application made with react and tailwind css full responsive.",
    image: travel,
    technologies: ["React", "Tailwind"],
    color: "#f59e0b",
    status: "Completed",
    date: "Oct 2024",
    type: "Frontend",
    live: "https://travelreactwebsite.vercel.app/",
    github: "https://github.com/cobrakai3005/travel_react_website",
  },
  {
    id: 5,
    title: "A Finance App Frontend",
    description:
      "A frontend application made with react and tailwind css full responsive.",

    image: finance,

    technologies: ["React", "Tailwind", "CSS"],
    color: "#ef4444",
    status: "Completed",
    date: "Sep 2024",
    type: "Frontend",
    live: "https://datewebsite.vercel.app/",
    github: "https://github.com/cobrakai3005/data_website-react",
  },
  {
    id: 6,
    title: "A Movie App",
    description: `Discover the Series Streaming Experience with Our App`,

    image: movie,

    technologies: ["React", "Tailwind", "CSS"],
    color: "#ef4444",
    status: "Completed",
    date: "Sep 20245",
    type: "Frontend",
    live: "https://movie-app-two-psi-55.vercel.app/",
    github: "https://github.com/cobrakai3005/Movie-App",
  },
];
