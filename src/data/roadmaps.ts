import { Category } from "../types";

export const categories: Category[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Step by step guides to frontend technologies",
    icon: "Layout",
    roadmaps: [
      {
        id: "react",
        title: "React Developer",
        description: "Step by step guide to becoming a modern React developer in 2025",
        subtopics: [
          {
            title: "React Fundamentals",
            description: "Core React concepts and features",
            content: [
              "JSX & Components",
              "Props & State",
              "Hooks",
              "Context API",
              "Redux",
              "React Router",
              "Testing",
              "Performance Optimization",
            ],
          },
          {
            title: "React Ecosystem",
            description: "Popular libraries and tools in the React ecosystem",
            content: [
              "Material-UI",
              "Styled Components",
              "Formik",
              "React Query",
              "Next.js",
              "Gatsby",
              "Storybook",
              "Jest & Testing Library",
            ],
          },
          {
            title: "Advanced React",
            description: "Advanced React concepts and patterns",
            content: [
              "Server-Side Rendering",
              "Code Splitting",
              "Error Boundaries",
              "Higher-Order Components",
              "Render Props",
              "Custom Hooks",
              "Concurrent Mode",
              "Suspense",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "vue",
        title: "Vue.js Developer",
        description: "Complete guide to becoming a Vue.js developer",
        subtopics: [
          {
            title: "Vue Fundamentals",
            description: "Core Vue.js concepts and features",
            content: [
              "Vue Syntax",
              "Components",
              "Directives",
              "Reactivity",
              "Vuex",
              "Vue Router",
              "Composition API",
              "Testing",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "angular",
        title: "Angular Developer",
        description: "Master Angular development from scratch",
        subtopics: [
          {
            title: "Angular Fundamentals",
            description: "Core Angular concepts and features",
            content: [
              "Angular CLI",
              "Components & Directives",
              "Modules & Services",
              "Forms & Validation",
              "Routing",
              "HTTP Client",
              "RxJS",
              "Testing",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "svelte",
        title: "Svelte Developer",
        description: "Master modern web development with Svelte",
        subtopics: [
          {
            title: "Svelte Fundamentals",
            description: "Core Svelte concepts and features",
            content: [
              "Svelte Syntax",
              "Component Structure",
              "Reactivity",
              "Stores",
              "Animations",
              "SvelteKit",
              "TypeScript Integration",
              "Testing",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "nextjs",
        title: "Next.js Developer",
        description: "Build production-ready React applications with Next.js",
        subtopics: [
          {
            title: "Next.js Fundamentals",
            description: "Essential Next.js concepts",
            content: [
              "Routing System",
              "Server Components",
              "Data Fetching",
              "API Routes",
              "Static Site Generation",
              "Image Optimization",
              "Middleware",
              "Deployment",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    description: "Step by step guides to backend technologies",
    icon: "Server",
    roadmaps: [
      {
        id: "nodejs",
        title: "Node.js Developer",
        description: "Complete guide to becoming a Node.js developer",
        subtopics: [
          {
            title: "Node.js Fundamentals",
            description: "Core Node.js concepts and features",
            content: [
              "Node Basics & NPM",
              "Express.js",
              "RESTful APIs",
              "Authentication",
              "Authorization",
              "WebSockets",
              "Testing",
              "Performance Optimization",
            ],
          },
          {
            title: "Node.js Ecosystem",
            description: "Popular libraries and tools in the Node.js ecosystem",
            content: [
              "MongoDB",
              "Mongoose",
              "SQL Databases",
              "Sequelize",
              "GraphQL",
              "Apollo Server",
              "Docker",
              "CI/CD",
            ],
          },
          {
            title: "Advanced Node.js",
            description: "Advanced Node.js concepts and patterns",
            content: [
              "Microservices",
              "Caching Strategies",
              "WebSockets",
              "Authentication Flows",
              "Error Handling",
              "Security Best Practices",
              "Performance Tuning",
              "Scalability",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "python",
        title: "Python Backend Developer",
        description: "Master Python backend development",
        subtopics: [
          {
            title: "Python Fundamentals",
            description: "Core Python concepts",
            content: [
              "Python Basics",
              "Flask",
              "Django",
              "RESTful APIs",
              "ORMs",
              "Testing (Pytest)",
              "Async Programming",
              "Security",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "java",
        title: "Java Backend Developer",
        description: "Master Java backend development",
        subtopics: [
          {
            title: "Java Fundamentals",
            description: "Core Java concepts",
            content: [
              "Java Basics & OOP",
              "Spring Framework",
              "Spring Boot",
              "JPA & Hibernate",
              "Microservices",
              "Testing (JUnit)",
              "Build Tools (Maven/Gradle)",
              "Security",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "go",
        title: "Go Backend Developer",
        description: "Master Go backend development",
        subtopics: [
          {
            title: "Go Fundamentals",
            description: "Core Go concepts",
            content: [
              "Go Syntax",
              "Concurrency",
              "Packages & Modules",
              "Error Handling",
              "Testing",
              "Web Frameworks",
              "Database Integration",
              "Microservices",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    description: "Learn mobile app development",
    icon: "Smartphone",
    roadmaps: [
      {
        id: "react-native",
        title: "React Native Developer",
        description: "Master React Native development",
        subtopics: [
          {
            title: "React Native Fundamentals",
            description: "Core React Native concepts",
            content: [
              "React Navigation",
              "Redux",
              "API Requests",
              "Authentication",
              "Push Notifications",
              "Performance Optimization",
              "Testing",
              "Deployment",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "flutter",
        title: "Flutter Developer",
        description: "Master Flutter development",
        subtopics: [
          {
            title: "Flutter Fundamentals",
            description: "Core Flutter concepts",
            content: [
              "Dart Basics",
              "Widgets & Layouts",
              "State Management",
              "Networking",
              "Local Storage",
              "Animations",
              "Testing",
              "Deployment",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "android",
        title: "Android Developer",
        description: "Master Android app development",
        subtopics: [
          {
            title: "Android Fundamentals",
            description: "Core Android concepts",
            content: [
              "Java/Kotlin Basics",
              "Activities & Fragments",
              "Intents & Services",
              "Networking",
              "Local Storage",
              "Permissions",
              "Testing",
              "Deployment",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "ios",
        title: "iOS Developer",
        description: "Master iOS app development",
        subtopics: [
          {
            title: "iOS Fundamentals",
            description: "Core iOS concepts",
            content: [
              "Swift Basics",
              "UIKit",
              "Networking",
              "Core Data",
              "Auto Layout",
              "Testing",
              "Deployment",
              "SwiftUI",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    description: "Master DevOps practices and cloud platforms",
    icon: "Cloud",
    roadmaps: [
      {
        id: "aws",
        title: "AWS Cloud Developer",
        description: "Master Amazon Web Services",
        subtopics: [
          {
            title: "AWS Fundamentals",
            description: "Core AWS concepts",
            content: [
              "IAM & Security",
              "EC2 & S3",
              "Lambda",
              "API Gateway",
              "RDS & DynamoDB",
              "VPC & Subnets",
              "CloudFormation",
              "CI/CD",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "kubernetes",
        title: "Kubernetes Expert",
        description: "Master container orchestration",
        subtopics: [
          {
            title: "Kubernetes Fundamentals",
            description: "Core Kubernetes concepts",
            content: [
              "Pods & Deployments",
              "Services & Ingress",
              "ConfigMaps & Secrets",
              "Volumes & PVCs",
              "Network Policies",
              "Helm Charts",
              "Monitoring",
              "CI/CD",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "azure",
        title: "Azure Cloud Developer",
        description: "Master Microsoft Azure",
        subtopics: [
          {
            title: "Azure Fundamentals",
            description: "Core Azure concepts",
            content: [
              "Azure AD & Security",
              "Virtual Machines",
              "App Services",
              "Azure Functions",
              "Storage Solutions",
              "Networking",
              "Monitoring",
              "DevOps Tools",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "gcp",
        title: "Google Cloud Developer",
        description: "Master Google Cloud Platform",
        subtopics: [
          {
            title: "GCP Fundamentals",
            description: "Core GCP concepts",
            content: [
              "IAM & Security",
              "Compute Engine",
              "Cloud Run",
              "Cloud Functions",
              "Cloud Storage",
              "BigQuery",
              "Kubernetes Engine",
              "Monitoring",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
    ],
  },
  {
    id: "data",
    name: "Data Science & AI",
    description: "Learn data science and artificial intelligence",
    icon: "Brain",
    roadmaps: [
      {
        id: "data-science",
        title: "Data Scientist",
        description: "Master data science concepts and tools",
        subtopics: [
          {
            title: "Data Science Fundamentals",
            description: "Core data science concepts",
            content: [
              "Python Basics",
              "NumPy & Pandas",
              "Data Visualization",
              "Statistical Analysis",
              "Machine Learning",
              "Deep Learning",
              "Model Deployment",
              "Big Data Tools",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "machine-learning",
        title: "Machine Learning Engineer",
        description: "Master machine learning concepts and tools",
        subtopics: [
          {
            title: "ML Fundamentals",
            description: "Core machine learning concepts",
            content: [
              "Linear Algebra",
              "Calculus",
              "Probability & Statistics",
              "Regression",
              "Classification",
              "Clustering",
              "Neural Networks",
              "Model Deployment",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "deep-learning",
        title: "Deep Learning Engineer",
        description: "Master deep learning concepts and tools",
        subtopics: [
          {
            title: "DL Fundamentals",
            description: "Core deep learning concepts",
            content: [
              "Neural Networks",
              "Convolutional NNs",
              "Recurrent NNs",
              "Autoencoders",
              "GANs",
              "Transfer Learning",
              "Model Optimization",
              "Model Deployment",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "nlp",
        title: "NLP Engineer",
        description: "Master natural language processing",
        subtopics: [
          {
            title: "NLP Fundamentals",
            description: "Core NLP concepts",
            content: [
              "Text Processing",
              "Tokenization",
              "POS Tagging",
              "Named Entity Recognition",
              "Sentiment Analysis",
              "Text Classification",
              "Seq2Seq Models",
              "BERT & Transformers",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
    ],
  },
  {
    id: "blockchain",
    name: "Blockchain Development",
    description: "Learn blockchain and Web3 development",
    icon: "Link",
    roadmaps: [
      {
        id: "ethereum",
        title: "Ethereum Developer",
        description: "Master Ethereum blockchain development",
        subtopics: [
          {
            title: "Ethereum Basics",
            description: "Core Ethereum concepts",
            content: [
              "Solidity Programming",
              "Ethereum Architecture",
              "Smart Contracts",
              "Web3.js Integration",
              "Token Standards",
              "Security",
              "Testing",
              "DApps",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
      {
        id: "solana",
        title: "Solana Developer",
        description: "Master Solana blockchain development",
        subtopics: [
          {
            title: "Solana Basics",
            description: "Core Solana concepts",
            content: [
              "Rust Programming",
              "Solana Architecture",
              "Program Development",
              "Account Model",
              "Token Standards",
              "Web3.js Integration",
              "Security",
              "Testing",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
    ],
  },
  {
    id: "testing",
    name: "Testing & QA",
    description: "Master software testing and quality assurance",
    icon: "CheckCircle",
    roadmaps: [
      {
        id: "testing",
        title: "Quality Assurance Engineer",
        description: "Master software testing concepts and tools",
        subtopics: [
          {
            title: "Testing Fundamentals",
            description: "Core testing concepts",
            content: [
              "Manual Testing",
              "Automation Testing",
              "Test Planning",
              "Test Cases",
              "Test Suites",
              "CI/CD Integration",
              "Performance Testing",
              "Security Testing",
            ],
          },
        ],
        roadmaps: undefined,
        icon: undefined
      },
    ],
  }
];