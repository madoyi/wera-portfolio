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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "2D Image Bounding Boxes",
    icon: web,
  },
  {
    title: "Semantic Segmentation",
    icon: mobile,
  },
  {
    title: "Text Annotation",
    icon: backend,
  },
  {
    title: "3D Point Cloud Bounding Boxes",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "3D segmentation ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "3D segmentation: dividing a 3D image into multiple segments or regions based on certain characteristics.",
      "Applications: medical imaging, computer vision, robotics, autonomous driving.",
      "Approaches: thresholding, region growing, graph-based methods, machine learning-based methods.",
      "Thresholding: simple technique using a threshold value to divide image into two regions.",
      "Region growing: starting with seed point and expanding region by adding adjacent pixels meeting certain criteria.",
      "Graph-based methods: modeling image as a graph and dividing it into subgraphs based on properties.",
      "Machine learning-based methods: using algorithms such as CNNs to learn from labeled data and segment new images.",
      "Benefits: extracting meaningful information from complex data sets, analyzing structure and function in neuroimaging, segmenting organs and tumors in medical imaging, segmenting objects for robotics and autonomous driving.",

    ],
  },
  {
    title: "Bounding Box",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Bounding box: rectangular box around an object or region of interest in an image.",
      "Purpose: identify objects in an image, crop and extract objects, measure size and location of objects, train object detection models.",
      "Challenges: varying object sizes, shapes, orientations, occlusion, clutter, noise, lighting conditions, real-time processing.",
      "Benefits: improve accuracy and efficiency of computer vision tasks, automate object identification and analysis, enable new applications in various industries.",
      "Applications: object detection, object tracking, image retrieval, video surveillance, autonomous vehicles, robotics.",
    ],
  },
  {
    title: "Polygon segmentation",
    icon: shopify,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Polygon segmentation: process of segmenting an object or region of interest in an image by drawing a closed polygonal shape around it.",
      "Purpose: identify objects in an image, extract objects, measure size and location of objects, train object detection models.",
      "Applications: object detection, image segmentation, image retrieval, video surveillance, autonomous vehicles, robotics.",
      "Challenges: varying object sizes, shapes, orientations, occlusion, clutter, noise, lighting conditions, real-time processing.",
      "Benefits: improve accuracy and efficiency of computer vision tasks, automate object identification and analysis, enable new applications in various industries.",
    ],
  },
  {
    title: "text annotation",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Purpose: enhance the understanding of the content, enable search and retrieval, facilitate machine learning and computer vision tasks.",
      "Types: object or region labels, captions, keywords, descriptions, metadata.",
      "Applications: image and video search, recommendation systems, social media, e-commerce, medical imaging, autonomous vehicles, robotics.",
      "Benefits: improve the accuracy and efficiency of information retrieval, enable new applications in various industries, enhance the user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We were impressed with the accuracy and efficiency of their 3D LiDAR services. They delivered high-quality results that exceeded our expectations..",
    name: "Lee",
    designation: "Data scientist",
    company: "Acme",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Their polygon segmentation services helped us improve our object recognition models. Their attention to detail and quick turnaround time was exceptional.",
    name: "William",
    designation: "Head of ML",
    company: "Atlas",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "We highly recommend their bounding box annotation services. Their annotations were precise and consistent, which greatly improved the performance of our computer vision algorithms.",
    name: "Wang",
    designation: "Data Scientist",
    company: "fruit scouts",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Lidar ",
    description:
      "3D LiDAR (Light Detection and Ranging) is a remote sensing technology that uses laser light to measure distances and create 3D point clouds of objects and environments. Here are some key points about 3D LiDAR.",
    tags: [
      {
        name: " environment mapping",
        color: "blue-text-gradient",
      },
      {
        name: "autonomous vehicles",
        color: "green-text-gradient",
      },
      {
        name: "robotics",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Polygon Segmentation",
    description:
      "computer vision technique that involves segmenting an object or region of interest in an image by drawing a closed polygon around it.",
    tags: [
      {
        name: "image retrieval",
        color: "blue-text-gradient",
      },
      {
        name: "video surveillance",
        color: "green-text-gradient",
      },
      {
        name: "autonomous vehicles",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bounding Box",
    description:
      "identify and extract objects from an image or video, measure size and location of objects, and train object detection models.",
    tags: [
      {
        name: "object detection",
        color: "blue-text-gradient",
      },
      {
        name: "image segmentation",
        color: "green-text-gradient",
      },
      {
        name: "video surveillance",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
