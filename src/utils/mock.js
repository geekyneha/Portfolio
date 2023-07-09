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
   about:"THis is a gym web site",
   src:image1,
  },
  {
    id: uuidv4(),
    name:"Google Doc",
   about:"This is doc clone",
   src:image2
  },
  {
    id: uuidv4(),
    name: "Kanban Board",
   about:"The Kan ban Board",
   src:image3
  },
  {
    id: uuidv4(),
    name: "Twitter clone",
   about:"The twitter clone",
   src:image4
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
