import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  prisma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  smartToDo,
  threejs,
  psql,
  nextjs,
  githubTech,
  KM,
  LighthouseLabs,
  UofR,
  SAIT,
  SOS,
  whatsThere,
  LightBnB,
  Jungle,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: psql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "GitHub",
    icon: githubTech,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
];

const experiences = [
  {
    title: "Office Systems Expert",
    company_name: "Konica Minolta Business Solutions",
    icon: KM,
    iconBg: "white",
    date: "Sept 2013 - Current",
    points: [
      "Collaborate with national solutions support team to capture requirements for new deployments.",
      "Implement configurations for MFP installations based on agreed requirements.",
      "Perform testing of functionalities and software upgrades for MFPs within customer networks.",
      "Identify, research, and resolve hardware, software, and network system issues raised by customers. Quickly troubleshoot printing systems failures and discrepancies.",
      "Provide professional and responsive solutions for problems, maintain good customer relationships and an elevated level of customer satisfaction.",
      `Key accomplishments:
      Honored with the Top 10 Tech Award of Canada on 14 separate occasions.`
    ],
  },
  {
    title: "Network Field Service Technician",
    company_name: "Success Office Systems",
    icon: SOS,
    iconBg: "WHITE",
    date: "Mar 2011 - Mar 2013",
    points: [
      "Tested client machines and equipment, assessed problems and provided viable solutions, effectively communicating with clients to ensure continued productivity.",
      "Assessed and verified network configurations, ensuring optimal performance and security.",
    ],
  },
];

const educations = [
  {
    title: "Diploma of Full-Stack Web Development",
    institution_name: "Lighthouse Labs",
    icon: LighthouseLabs,
    iconBg: "white",
    date: "Aug 2022 - May 2023",
  },
  {
    title: "Electrical Design Certificate",
    institution_name: "SAIT",
    icon: SAIT,
    iconBg: "white",
    date: "Jan 2016 - Apr 2018",
  },
  {
    title: "AutoCAD Certificate",
    institution_name: "SAIT",
    icon: SAIT,
    iconBg: "white",
    date: "Jan 2015 - Dec 2016",
  },
  {
    title: "Electronic Systems Engineering",
    institution_name: "University of Regina",
    icon: UofR,
    iconBg: "white",
    date: "Sept 2003 - Jan 2009",
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Whats There",
    description:
      "This is a travel companion app that helps users find the most popular attractions in any city they choose to visit. It also allows users to create a profile using Google's OAUTH login, plan multiple trips, and add and remove attractions from their itinerary. The app utilizes Google Maps API and TripAdvisor API to provide users with accurate and up-to-date information about the attractions they wish to visit.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: whatsThere,
    source_code_link: "https://github.com/stevenls811118/whatsThere",
  },
  {
    name: "Smart TODO",
    description:
      "This SmartToDO app allows users to enter to-do tasks and uses multiple APIs to automatically categorize them into five categories: Film / Series, Restaurants, Books, Products, or General. Users can manually select the category if there's ambiguity to avoid misclassification.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Rapid API",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: smartToDo,
    source_code_link: "https://github.com/stevenls811118/SmartTodoApp",
  },
  {
    name: "LightBnB",
    description:
      "A simple multi-page Airbnb clone that uses a server-side Javascript to display the information from queries to we oages via SQL queries.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "PSQL",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: LightBnB,
    source_code_link: "https://github.com/stevenls811118/LightBnB/tree/master/LightBnB_WebApp-master",
  },
  {
    name: "Jungle",
    description:
      "A mini e-commerce application built with Rails 6.1 for purposes of teaching Rails by example.",
    tags: [
      {
        name: "Ruby on Rails",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Jungle,
    source_code_link: "https://github.com/stevenls811118/jungle-rails",
  },
];

export { services, technologies, experiences, educations, projects };