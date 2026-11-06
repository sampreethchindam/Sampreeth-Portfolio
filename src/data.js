// Personalize this file first. Replace placeholders and confirm all claims before publishing.
export const profile = {
  name: 'Sampreeth',
  full: 'Sampreeth Chindam',
  role: 'Senior Data Engineer · AI Engineering · Gen AI',
  location: 'United States',
  email: '', // Add your public contact email before launch
  intro: 'I design reliable cloud data platforms, real-time pipelines and AI-powered workflows that turn complex data into business impact.',
  github: 'https://github.com/sampreethchindam',
  linkedin: 'https://www.linkedin.com/in/sampreeth-chindam/',
  resume: '', // Optional: copy a public-safe PDF to public/resume.pdf and set 'resume.pdf'
  avatar: 'img/faces/avatar.svg',
  heroImage: 'img/photos/hero.svg', // Replace with a photo or transparent male portrait when ready
}

export const heroCounts = [
  { value: '6+', label: 'years in data engineering' },
  { value: '30%', label: 'faster batch processing' },
  { value: '40%', label: 'fewer release incidents' },
]

export const about = {
  photos: [
    'img/photos/cloud.svg', 'img/photos/stream.svg',
    'img/photos/ai.svg', 'img/photos/quality.svg',
  ],
  roles: ['Cloud Data Engineer', 'Streaming Data Specialist', 'AI Workflow Builder', 'Data Platform Optimizer'],
  paragraphs: [
    'I am a Senior Data Engineer with 6+ years of experience building batch and streaming data platforms for financial services, healthcare, and enterprise analytics.',
    'My core toolkit includes Python, SQL, Spark, AWS, Snowflake and orchestration frameworks. I focus on scalable architectures, reliable delivery, production observability and practical AI solutions.',
  ],
  stats: [
    { value: '6+', label: 'Years of experience' },
    { value: '3', label: 'Industry domains' },
    { value: '30%', label: 'Batch runtime improvement' },
    { value: '40%', label: 'Reduction in release incidents' },
  ],
}

export const projects = [
  {
    title: 'TalentPilot',
    tag: 'AI · Job search platform',
    image: 'img/projects/talentpilot.svg',
    text: 'Personal portfolio project exploring AI-assisted job discovery, job-to-resume matching and tailored application workflows. Scheduled job refresh is still planned.',
    tech: ['Python', 'AI agents', 'LLMs', 'GitHub'],
    link: 'https://github.com/sampreethchindam/TalentPilot',
    color: '#DCEEF8',
  },
  {
    title: 'Regulatory Risk Data Platform',
    tag: 'Finance · Data engineering',
    image: 'img/projects/finance.svg',
    text: 'Enterprise batch and regulatory risk pipelines with Spark optimization, orchestration, validation and reporting-ready data models. Project details are summarized without proprietary code.',
    tech: ['AWS', 'Spark', 'SQL', 'Redshift', 'Airflow'],
    link: '',
    color: '#E1EDF8',
  },
  {
    title: 'Healthcare Data Integration',
    tag: 'Healthcare · ETL / ELT',
    image: 'img/projects/healthcare.svg',
    text: 'Healthcare file-processing and data-quality workflows using Python, AWS ingestion and secure warehouse loading, with an emphasis on compliance and operational reliability.',
    tech: ['Python', 'Pandas', 'AWS Glue', 'Lambda', 'Redshift'],
    link: '',
    color: '#DFF3EF',
  },
]

// Dates are intentionally omitted until you confirm the exact timeline.
export const journey = [
  { year: 'Recent', title: 'Senior Data Engineer', org: 'Citi', text: 'Built and optimized risk and regulatory data pipelines, monitoring and automated deployment workflows.', photo: 'img/photos/cloud.svg', note: 'cloud data at scale' },
  { year: 'Prior', title: 'Data Engineering', org: 'Millennium', text: 'Worked with financial data, SQL and warehouse systems supporting investment-related workflows.', photo: 'img/photos/quality.svg', note: 'financial data systems' },
  { year: 'Prior', title: 'Healthcare Data Engineering', org: 'Thryve Digital Health', text: 'Supported regulated healthcare pipelines, validation rules and complex claims-related data.', photo: 'img/photos/stream.svg', note: 'data quality first' },
  { year: '2026', title: 'AI Portfolio Project', org: 'TalentPilot', text: 'Building an AI-assisted job search and resume-matching experience as a public software project.', photo: 'img/photos/ai.svg', note: 'building with AI' },
]

export const skills = [
  'Python', 'Advanced SQL', 'PySpark', 'Scala', 'Apache Spark',
  'AWS', 'AWS Glue', 'Amazon Redshift', 'S3', 'Lambda', 'EMR',
  'Snowflake', 'Databricks', 'Airflow', 'dbt', 'Kafka',
  'Spark Streaming', 'Delta Lake', 'BigQuery', 'Terraform',
  'Docker', 'Git', 'CI/CD', 'Data Quality', 'AI Agents',
]

// Impact metrics reported in prior resume discussions; validate them before publishing.
export const scoreboard = [
  { label: 'Batch runtime', note: 'reduction in nightly batch duration', value: 30, suffix: '%' },
  { label: 'Report delivery', note: 'faster reporting with curated data models', value: 35, suffix: '%' },
  { label: 'Release stability', note: 'fewer post-deployment incidents', value: 40, suffix: '%' },
  { label: 'Incident response', note: 'faster response with metrics and runbooks', value: 15, suffix: '%' },
]
export const certifications = [] // Add actual certificates later; no fabricated claims
