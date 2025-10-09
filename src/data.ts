import { Code, Database, Cloud, Terminal, BarChart } from 'lucide-react';

export const expertise = [
  {
    name: 'Languages & Frameworks',
    icon: Code,
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Spring Boot', 'React', 'Node.js', 'FastAPI', 'Django', 'SQL']
  },
  {
    name: 'Data Engineering & ETL',
    icon: Database,
    skills: ['Apache Spark', 'Kafka', 'Airflow', 'Flink', 'Snowflake', 'dbt-core', 'ETL/ELT Pipelines', 'Data Modeling', 'Delta Lake']
  },
  {
    name: 'AI/ML',
    icon: BarChart,
    skills: ['LangChain', 'CrewAI', 'LangGraph', 'RAG', 'MLflow', 'TensorFlow', 'PyTorch', 'AutoML', 'Optuna', 'TorchServe', 'NVIDIA Triton', 'Kubeflow', 'Ray', 'Weights & Biases', 'ONNX', 'Quantization', 'Distillation']
  },
  {
    name: 'Cloud Infrastructure',
    icon: Cloud,
    skills: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Terraform', 'Docker', 'Pulumi', 'Crossplane', 'FluxCD']
  },
  {
    name: 'DevOps & SRE',
    icon: Terminal,
    skills: ['Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'Datadog', 'ELK Stack', 'Splunk', 'Ansible', 'PagerDuty', 'Kibana']
  }
];

export const education = [
  {
    degree: 'Master of Science, Data Science',
    school: 'University at Buffalo, The State University of New York',
    period: 'Jan 2024 – May 2025',
    location: 'Buffalo, New York',
    gpa: 'CGPA: 3.4/4',
    courses: ["Python", "Probability", "Statistical Data Mining in R", "ML", "DL", "Tableau", "Postgres", "Matlab"]
  },
  {
    degree: 'Bachelor of Technology, Electronics and Computer Engineering',
    school: 'Vellore Institute of Technology',
    period: 'July 2019 – May 2023',
    location: 'Chennai, India',
    gpa: 'CGPA: 3.6/4',
    courses: ["Autocad", "C language", "Python", "Statistics", "Mathematics", "Communication Skills"]
  }
];

export const experience = [
  {
    title: 'GenAI Engineer',
    company: 'Community Dreams Foundation',
    period: 'July 2025 - present',
    achievements: [
      'Built a GenAI-driven Kubernetes troubleshooting system using MCP server–client architecture with Foundation Models, cutting issue resolution time by 60%.',
      'Developed an interactive Streamlit UI for pod, node, and cluster diagnostics via gRPC and LangChain-style orchestration.',
      'Deployed a fine-tuned Qwen-1.5B on NVIDIA Triton, cutting inference latency by 35%.',
      'Designed a GPU observability pipeline ingesting 5M+ CloudWatch datapoints/day via Spark + Lambda + SQS, stored in TimescaleDB for low-latency time-series analytics.',
      'Integrated LangGraph-based AI tools for GPU efficiency and cost analysis, delivering savings insights.',
      'Implemented GPU fractionalization, boosting utilization by 40% and cutting idle GPU time by 50%.'
    ]
  },
  {
    title: 'AI Research Assistant',
    company: 'University at Buffalo',
    period: 'Jan 2024 - May 2024',
    project: 'Carbon Emission Reduction Techniques',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'NumPy', 'Pandas'],
    achievements: [
      'Researched GPT-2\'s energy efficiency & carbon reduction using quantization, distillation, low-rank factorization.',
      'Optimized GPT-2 efficiency: 19.8% CO2 reduction with only 6% perplexity increase via quantization.',
      'Achieved 45.2% emissions reduction combining distillation and quantization, demonstrating significant carbon savings at the cost of substantial performance degradation by 57.4%, suitable for extreme efficiency scenarios.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Kreditbee',
    period: 'Jan 2022 – Dec 2023',
    achievements: [
      'Developed and optimized UPI payment module with bank account integration, PIN management, and migration of legacy modules from Redux-Saga to React Query, improving maintainability, scalability, and overall app performance.',
      'Enhanced cross-platform user experience by optimizing load performance (cutting main chunk size by 33KB) and leading the development of 130+ reusable UI components with Storybook, reducing front-end development time by 40% and ensuring design consistency across Android, iOS, and Web.',
      'Built and deployed RESTful APIs (FastAPI) and designed microservices on AWS ECS and Lambda, enabling real-time reporting, scalability, and availability.',
      'Implemented Kafka-based pipelines and ETL workflows, streamlining real-time event processing and secure data integration.',
      'Enhanced system observability with AWS CloudWatch, Azure App Insights, improving monitoring and incident resolution.'
    ]
  }
];

export const projects = [
  {
    title: 'Apply AI',
    description: 'Administered asynchronous job processing resulting in 60% improved throughput, by implementing Celery and Redis for parallel application processing with sub-500ms API latency with 95% uptime. Executed LLM-powered resume optimization leading to 40% higher ATS match rates, by utilizing Groq models with cosine similarity scoring algorithms.',
    image: '/logos/jar-app.png',
    technologies: ['CrewAI', 'Python', 'NextJS', 'FastAPI', 'Groq', 'Celery', 'Redis'],
    github: 'https://github.com/Varunkk24/apply-ai',
    demo: null
  },
  {
    title: 'Enterprise-Grade Full-Stack Application with Kubernetes',
    description: 'Architected and developed a robust microservices application using Spring Boot, implementing an API Gateway, Kafka for asynchronous communication, and a polyglot persistence strategy with both MongoDB and MySQL. Engineered a scalable deployment workflow using Docker and Kubernetes for container orchestration, while leveraging the Grafana Stack (Prometheus, Loki, Tempo) for end-to-end monitoring, logging, and tracing.',
    image: '/logos/kubernetes-enterprise-app.png',
    technologies: ['Spring Boot', 'Kubernetes', 'Docker', 'Kafka', 'MongoDB', 'MySQL', 'Grafana', 'Prometheus'],
    github: 'https://github.com/Varunkk24/enterprise-k8s-app',
    demo: null
  },
  {
    title: 'Enterprise Data Engineering Workflow on Azure Cloud',
    description: 'Built an end-to-end data pipeline using Azure Data Factory, Data Lake Gen2, Databricks (PySpark), Synapse, and Power BI, improving data availability by 85% and reducing reporting lag by 70% through real-time processing and optimized transformations. Automated data ingestion, transformation, and reporting workflows, cutting manual effort by 90% and data processing time by 60%, while enabling business insights through interactive Power BI dashboards integrated with Synapse external tables.',
    image: '/logos/azure_pipeline.png',
    technologies: ['Azure Data Factory', 'Data Lake Gen2', 'Databricks', 'PySpark', 'Synapse', 'Power BI'],
    github: 'https://github.com/Varunkk24/azure-data-pipeline',
    demo: null
  },
  {
    title: 'Medical AI Assistant',
    description: 'Engineered an end-to-end RAG pipeline using Gemini 2.5 Flash for advanced text processing and summarization, and a Pinecone vector database for scalable semantic search across 4K medical records. Created a Streamlit chatbot with an enhanced retriever that combines semantic and keyword-based scoring for highly accurate responses, while also incorporating a query classifier for user safety.',
    image: '/logos/medical-ai-assistant.png',
    technologies: ['Gemini 2.5 Flash', 'Pinecone', 'Streamlit', 'RAG', 'Python', 'Vector Database'],
    github: 'https://github.com/Varunkk24/medical-ai-assistant',
    demo: null
  }
];

export const certificates = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    image: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    link: 'https://www.credly.com/badges/aws-cloud-practitioner'
  },
  {
    name: 'AWS Certified Data Engineer - Associate',
    issuer: 'Amazon Web Services',
    image: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    link: 'https://www.credly.com/badges/aws-data-engineer-associate'
  },
  {
    name: 'Academy Accreditation - Generative AI Fundamentals',
    issuer: 'Databricks',
    image: '/logos/databricks.png',
    link: 'https://credentials.databricks.com/606fc8cd-1373-4f14-afe5-cc3e9bc28bb1#acc.VMQ8ajio'
  }
];




