import {
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
import {SiAdobephotoshop} from 'react-icons/si'


export const link = [
  {
    id: 1,
    url: "/",
    text: "Resume",
  },
  {
    id: 2,
    url: "/protfolio",
    text: "Protfolio",
  },
  {
    id: 3,
    url: "/contact",
    text: "Contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/nabilmasudh",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.facebook.com/NABILMASUDH/",
    icon: <FaFacebookSquare />,
  },
  {
    id: 3,
    url: "https://www.instagram.com/nabil.masudh565/",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com/in/nabil-masud/",
    icon: <FaLinkedin />,
  },
];

export const services = [
  {
    id: 1,
    icon: <FaReact />,
    title: "Web Development",
    text: "my skill is web development with react and something",
  },
  {
    id: 2,
    icon: <SiAdobephotoshop />,
    title: "graphics design",
    text: "my skill is graphics design with Adobe Illustrator CS",
  },
];

const menu = [
  {
    id: 1,
    title: "Hotel Management System",
    category: "react",
    img: "./images/item-1.jpeg",
    desc: `Hotel Management delivered hotel news, analysis and operational strategies...`,
  },
  {
    id: 2,
    title: "Hospital Management System",
    category: "react",
    img: "./images/item-2.jpeg",
    desc: `A hospital information system (HIS) is an element of health informatics that focuses mainly on the administrational needs of hospitals. In many implementations...`,
  },
  {
    id: 3,
    title: "Hospital Management System",
    category: "react",
    img: "./images/item-3.jpeg",
    desc: `A hospital information system (HIS) is an element of health informatics that focuses mainly on the administrational needs of hospitals. In many implementations...
`,
  },
  {
    id: 4,
    title: "Food Order Management System",
    category: "react",
    img: "./images/item-4.jpeg",
    desc: `A food system includes all processes and infrastructure involved in feeding...`,
  },
  {
    id: 5,
    title: "Hotel Management System",
    category: "react",
    img: "./images/item-5.jpeg",
    desc: `Hotel Management delivered hotel news, analysis and operational strategies. Regular features included special reports, research/top lists... `,
  },
  {
    id: 6,
    title: "E-commerce Management System",
    category: "javascript",
    img: "./images/item-6.jpeg",
    desc: `E-commerce  is the activity of electronically buying or selling of products on online services or over the Internet. E-commerce draws on technologies such as mobile commerce...`,
  },

  {
    id: 7,
    title: "Hospital Management System",
    category: "javascript",
    img: "./images/item-8.jpeg",
    desc: `A hospital information system (HIS) is an element of health informatics that focuses mainly on the administrational needs of hospitals. In many implementations, a HIS is a comprehensive...
 `,
  },
  {
    id: 8,
    title: "Food Order Management System",
    category: "html",
    img: "./images/item-7.jpeg",
    desc: `A food system includes all processes and infrastructure involved in feeding `,
  },
  {
    id: 9,
    title: "Hospital Management System",
    category: "html",
    img: "./images/item-9.jpeg",
    desc: `A hospital information system (HIS) is an element of health informatics that focuses mainly on the administrational needs of hospitals...
.`,
  },
  {
    id: 10,
    title: "Hospital Management System",
    category: "html",
    img: "./images/item-8.jpeg",
    desc: `A hospital information system (HIS) is an element of health informatics that focuses mainly on the administrational needs of hospitals. In many implementations, a HIS is a comprehensive...
  `,
  },
];
export default menu;
