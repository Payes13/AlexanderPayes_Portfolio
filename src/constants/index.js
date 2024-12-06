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
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  AIImageTransformation,
  InventoryManagementSystem,
  AIChatGemini,
  TechnicalAssessment,
  AICodexChat,
  AppleWebsiteClone,
  cdvi,
  syntax,
  next,
  aws,
  AWSServerlessApplication
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
    id: "project",
    title: "Projects",
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
    title: "AWS Cloud Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SAP Cloud Integration Developer",
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
    name: "AWS",
    icon: aws,
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
    name: "Next JS",
    icon: next,
  }
];

const experiences = [
  {
    title: "Full Stack Developer and AWS Cloud Developer",
    company_name: "CDVI Americas",
    icon: cdvi,
    iconBg: "#383E56",
    date: "Jan 2020 - April 2022",
    points: [
      "Utilized React.js and Next.js to build dynamic, responsive user interfaces, integrated with Material UI and Tailwind CSS for a consistent design system.",
      "Developed and optimized backend services using Node.js and pg-promise for secure and efficient interaction with PostgreSQL databases.",
      "Deployed and managed scalable web applications using AWS Elastic Beanstalk, ensuring optimal performance and availability.",
      "Configured and optimized Amazon S3 buckets for secure storage solutions and efficient content delivery.",
      "More on Resume's work experience upon request"
    ],
  },
  {
    title: "SAP Cloud Integration Developer",
    company_name: "Syntax",
    icon: syntax,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "Designing and developing SAP CPI (Cloud Platform Integration) Integration Solutions using adapters such as: HTTP, SFTP, OData, SOAP, Process Direct, Salesforce, etc.",
      "Transforming input payload through mapping standard and customized functions using Groovy programming language.",
      "I developed Groovy scripts to implement custom data transformations, ensuring seamless and efficient integration of complex datasets.",
      "Assisting development teams in designing, developing, and testing SAP Integration interfaces.",
      "More on Resume's work experience upon request"
    ],
  },
];

const projects = [
  {
    name: "AI Image Transformation",
    description:
      "Web application that transforms images using Artificial Intelligence. Some features include remove object from an image, remove background, recolor objects, generate fill, refine image, and you have the option to purchase more credits to keep using the service.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary AI API",
        color: "orange-text-gradient",
      },
      {
        name: "stripe API",
        color: "black-gradient",
      },
    ],
    image: AIImageTransformation,
    source_code_link: "https://github.com/Payes13/NXTWebsite_AI_Image_TransformationJSM",
  },
  {
    name: "Inventory Management Dashboard",
    description:
      "Web application that provides users with comprehensive inventory management. The application enables users to access inventory data, track product sales and purchases, monitor expenses, and visualize sales summaries through interactive charts. Key features include dedicated pages for inventory management, product catalog, user administration, and customizable settings.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "black-gradient",
      },
    ],
    image: InventoryManagementSystem,
    source_code_link: "https://github.com/Payes13/NXTWebsite_InventoryER",
  },
  {
    name: "AI Chat Gemini",
    description:
      "Interactive application that enables users to engage in dynamic conversations with AI. Users can ask any question, and the AI will provide thoughtful responses. Additionally, the application supports image input, allowing users to upload images and receive AI-driven insights and answers related to the content of the image.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "gemini AI API",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: AIChatGemini,
    source_code_link: "https://github.com/Payes13/AIChatGoogleGemini/tree/master",
  },
  {
    name: "3D Design - Apple Website Clone",
    description:
      "Apple website clone, a visually striking clone of the Apple website using React.js, GSAP animations, and Three.js. Leveraging these powerful libraries, I created stunning 3D models and animations seamlessly integrated into the web pages, delivering an engaging and interactive user experience.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "GSAP animation library",
        color: "pink-text-gradient",
      },
    ],
    image: AppleWebsiteClone,
    source_code_link: "https://github.com/Payes13/FEWebsite_AppleCloneJSM",
  },
  {
    name: "AWS Serverless Application",
    description:
      "Serverless application using the serverless framework with Node.js and AWS. Key features include serverless architecture, AWS Lambda functions, API Gateway, and DynamoDB. The application is designed to be highly scalable and easy to maintain.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "lambda",
        color: "pink-text-gradient",
      },
      {
        name: "dynamoDB",
        color: "pink-text-gradient",
      },
      {
        name: "API gateway",
        color: "orange-text-gradient",
      },
    ],
    image: AWSServerlessApplication,
    source_code_link: "https://github.com/Payes13/BEAPI_AWS_ServerlessFramework_Fazt",
  },
  {
    name: "Technical Assessment",
    description:
      "This application allows you to fetch users from an API and display their information in a dynamic and interactive interface. Key features include row coloring for enhanced visualization, sorting functionality by name, last name, or country, as well as the ability to filter users by country. Users can also remove individual entries, reset to the original dataset.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "random user API",
        color: "pink-text-gradient",
      },
    ],
    image: TechnicalAssessment,
    source_code_link: "https://github.com/Payes13/FEWebsite_fetchUsersMid",
  },
  {
    name: "AI ChatGPT Codex",
    description:
      "AI-powered chat assistant designed to support users with coding-related questions by leveraging OpenAI's ChatGPT API. The assistant offers personalized guidance, answers programming queries, and helps users enhance their coding skills through engaging coding challenges.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "chatgpt AI API",
        color: "pink-text-gradient",
      },
    ],
    image: AICodexChat,
    source_code_link: "https://github.com/Payes13/FSWebsite_openAI_chat_assistantJSM",
  }
];

export { services, technologies, experiences, projects };
