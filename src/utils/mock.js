import { v4 as uuidv4 } from "uuid";
import image1 from '../gym.png'
import image2 from '../google-doc.png'
import image3 from '../kanban.png'
import image4 from '../twitter.png'

// Image url of All programs

export const  PROJECTS=[
  {
    id: uuidv4(),
    name: "Gym website",
   about:"The Gym Website is an interactive platform for a fitness center that demonstrates my expertise in web development, UX design, and the utilization of libraries. It incorporates a sticky header, user registration/login functionality, an engaging About Us section featuring a YouTube video, scrollable Training Programs, a dedicated Trainer section, Pricing details, and seamless integration with social media. This project serves as a testament to my skills in creating dynamic websites for fitness centers, offering a visually appealing and user-friendly experience to visitors.",
   catagory:"Fitness/Health & Wellness",
   src:image1,
   githubLink:"https://github.com/geekyneha/gym-website",
   deployedLink:"gym-clubb.vercel.app"
  },
  {
    id: uuidv4(),
    name:"Google Doc",
   about:"This project showcases a CSS-based implementation combined with a touch of React to enhance the functionality of a Google Docs-like application. By leveraging CSS styling and React components, this project offers an intuitive and visually appealing interface for creating and editing documents.",
   catagory:"Document Office",
   src:image2,
   githubLink:"https://github.com/geekyneha/google-doc/",
   deployedLink:"google-document-clone.vercel.app"
  },
  {
    id: uuidv4(),
    name: "Kanban Board",
   about:": This project introduces a simple implementation of a Kanban Board, an effective tool for visualizing and managing work tasks. The Kanban Board utilizes Post-it notes to represent tasks and their statuses, providing an intuitive system for tracking progress.",
   catagory:"Project Managemen/Productivity",
   src:image3,
   githubLink:"https://github.com/shubham-tiwari171/kanban-project/tree/development#README.md",
   deployedLink:"https://kanban-project-tm7o.vercel.app"
  },
  {
    id: uuidv4(),
    name: "Twitter clone",
   about:"This group project involved the successful creation of a Twitter clone, replicating key features of the popular microblogging platform. The team worked collaboratively to implement essential functionalities, including user authentication, protected routing for secure access, and a comprehensive tweet section allowing users to interact with posts through likes and dislikes.",
   catagory:"Social Media",
   src:image4,
   githubLink:"https://github.com/shubham-tiwari171/function-up-tiwtter-clone/blob/development/README.md",
   deployedLink:"https://legendary-crisp-0923a2.netlify.app"
  },

]
// Image url of Trainers
export const MYSKILLS=[
  {
   id:uuidv4(),
   url:"https://cdn3d.iconscout.com/3d/free/thumb/free-react-5645899-4695757.png"
  },
  {
    id: uuidv4(),
    url:"https://img.freepik.com/free-icon/javascript_318-698169.jpg"

  },
  {
    id: uuidv4(),
    url:"https://www.freeiconspng.com/thumbs/html5-icon/w3c-html5-logo-0.png"

  },
  {
    id: uuidv4(),
    url:"https://creazilla-store.fra1.digitaloceanspaces.com/icons/3411890/css-icon-md.png"

  },
  {
    id: uuidv4(),
    url:"https://icons.getbootstrap.com/assets/img/icons-hero.png"

  },
  {
    id: uuidv4(),
    url:"https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default"

  },
]
