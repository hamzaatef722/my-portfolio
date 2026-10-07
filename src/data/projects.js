// Set `image` to a path like '/thumbnails/react-jobs.png' to show a screenshot
// on the project card (put the actual file in public/thumbnails/).
// Leave it `null` to fall back to the plain tag header — no image required.
//
// Entries marked TODO need a real value (github / demo / image file).
export const projects = [
  {
    id: "wild-oasis-guest",
    name: "The Wild Oasis: Guest Booking Website",
    tag: "guest-site.jsx",
    description:
      "A full stack booking website for a boutique cabin hotel. Guests browse cabins, pick dates, add breakfast, and manage their own reservations after signing in with Google. Prices are recalculated on the server and every reservation is checked against the signed-in user.",
    stack: ["Next.js", "Auth.js", "Supabase", "Tailwind CSS"],
    github: "https://github.com/hamzaatef722/the-wild-oasis-client",
    demo: "https://the-wild-oasis-client-three.vercel.app",
    featured: true,
    image: "/wild-oasis-guest-img.png",
  },
  {
    id: "wild-oasis-staff",
    name: "The Wild Oasis: Staff Dashboard",
    tag: "staff-dashboard.jsx",
    description:
      "A full stack hotel management dashboard built for staff use only. Staff manage cabins, handle bookings, check guests in and out, and track revenue. Server state handled with React Query on a Supabase backend.",
    stack: [
      "React",
      "React Query",
      "Supabase",
      "styled-components",
      "Recharts",
    ],
    github: "https://github.com/hamzaatef722/the-wild-oasis-stuff",
    demo: "https://the-wild-oasis-stuff.vercel.app",
    featured: true,
    image: "/wild-oasis-staff-img.png",
  },
  {
    id: "popcorn",
    name: "Popcorn",
    tag: "movie-tracker.jsx",
    description:
      "A movie and TV tracker built with React. Browse titles in animated carousels and keep a personal watchlist. Global state managed with Redux Toolkit.",
    stack: [
      "React",
      "React Router",
      "Redux Toolkit",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/hamzaatef722/Popcorn",
    demo: "https://popcorn-ten-self.vercel.app",
    featured: false,
    image: "/popcorn-img.png",
  },
  {
    id: "fast-pizza",
    name: "Fast Pizza Co",
    tag: "pizza-app.jsx",
    description:
      "A full pizza ordering web app built with React. Users browse the menu, manage a cart, and place an order, with global state handled by Redux Toolkit and routing by React Router.",
    stack: ["React", "React Router", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/hamzaatef722/pizza-restaurant",
    demo: "https://pizza-restaurant-zeta.vercel.app",
    featured: false,
    image: "/fast-pizza-img.png",
  },
  {
    id: "react-jobs",
    name: "React Jobs",
    tag: "jobs-board.jsx",
    description:
      "A job listings platform connected to a real backend for fetching, adding, and managing job postings via REST API. Multi-page navigation with React Router and centralized state with Context API.",
    stack: ["React", "React Router", "Context API", "Tailwind CSS", "REST API"],
    github: "https://github.com/hamzaatef722/jobs-frontend",
    demo: "https://react-jobs-inky.vercel.app/",
    featured: false,
    image: "/react-job-img.png",
  },
  {
    id: "world-wise",
    name: "World Wise",
    tag: "travel-tracker.jsx",
    description:
      "A travel-tracking application that lets users log and visualize visited countries on an interactive map, with centralized state via Context API.",
    stack: ["React", "React Router", "Context API", "REST API"],
    github: "https://github.com/hamzaatef722/World-Wise",
    demo: "https://world-wise-one-sage.vercel.app/",
    featured: false,
    image: "/world-wise-img.jpg",
  },
  {
    id: "react-quiz",
    name: "React Quiz",
    tag: "quiz-app.jsx",
    description:
      "An interactive quiz application with dynamic scoring and a countdown timer, managing global state with the Context API.",
    stack: ["React", "Context API"],
    github: "https://github.com/hamzaatef722/React-Quiz",
    demo: "https://react-quiz-nine-teal.vercel.app/",
    featured: false,
    image: "/react-quiz-img.png",
  },
  {
    id: "games-app",
    name: "Games App",
    tag: "games-library.php",
    description:
      "A full-featured games library web app with user signup/login and an admin panel. Users can add or remove games from a personal library.",
    stack: ["PHP", "JavaScript", "CSS"],
    github: "https://github.com/hamzaatef722/games-web",
    demo: "https://games-review.infinityfree.me/",
    featured: false,
    image: "/game-review-img.png",
  },
  {
    id: "weather-app",
    name: "Weather App",
    tag: "weather-app.js",
    description:
      "A weather forecast app built with vanilla JavaScript, HTML, and CSS. Fetches live weather data from an API and displays current conditions and a multi-day forecast.",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/hamzaatef722/Weather-App", // TODO: add repo URL
    demo: "https://weather-app-six-kappa-97.vercel.app", // TODO: add live demo URL
    featured: false,
    image: "/weather-img.png",
  },
  {
    id: "daniels-portfolio",
    name: "Daniels Portfolio",
    tag: "portfolio.html",
    description:
      "A fully responsive personal portfolio website with a clean, minimalist design to showcase work experience and skills.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/hamzaatef722/daniels",
    demo: "https://daniels-eight-omega.vercel.app/",
    featured: false,
    image: "/daniels-img.png",
  },
  {
    id: "morgana-yacht",
    name: "Morgana Yacht",
    tag: "yacht-charter.html",
    description:
      "A yacht-charter themed website focused on UI/UX, using CSS animations and a modern responsive layout.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/hamzaatef722/morgana-yacht",
    demo: "https://alobaidiyachts.com/?lang=en",
    featured: false,
    image: "/morgana-img.png",
  },
  {
    id: "conan",
    name: "Conan",
    tag: "anime-landing.html",
    description:
      "An anime-themed landing page (Detective Conan) with a bold hero section and a responsive layout.",
    stack: ["HTML", "CSS"],
    github: "https://github.com/hamzaatef722/Conan", // TODO: add repo URL
    demo: "https://conan-teal.vercel.app", // TODO: add live demo URL
    featured: false,
    image: "/conan-img.png",
  },
];
