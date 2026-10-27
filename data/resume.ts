export interface WorkHistoryItem {
  role: string;
  company: string;
  period: string;
  location: string;
  impactMetric?: string;
  highlights: string[];
  stack: string[];
}

export interface MetricHighlight {
  label: string;
  value: string;
  subtext: string;
  /** Decorative classification shown in the card masthead, e.g. "TENURE". */
  tag: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  tagline: string;
  title: string;
  email: string;
  bio: string;
  location: string;
  country: string;
  resumeUrl: string;
  metrics: MetricHighlight[];
  skillGroups: SkillGroup[];
  workHistory: WorkHistoryItem[];
  socialLinks: { name: string; url: string; icon?: string }[];
}

export const resume: ResumeData = {
  name: "Jayson Panganiban",
  title: "Principal Automation Consultant & Product Engineer",
  email: "json.panganiban@gmail.com",
  tagline: "Test automation, performance engineering, and full-stack systems.",
  bio: "15+ years architecting zero-regression test automation, performance engineering, and high-volume customer communication (CCM) pipelines for tier-1 banking, fintech, crypto and insurance.",
  location: "Melbourne, VIC",
  country: "Australia",
  resumeUrl: "/JaysonPanganiban_CV.pdf",

  metrics: [
    {
      value: "15+ Yrs",
      label: "Industry Practice",
      subtext: "Tier-1 banking, fintech, crypto and insurance platforms",
      tag: "TENURE",
    },
    {
      value: "Full-Stack QA",
      label: "Core Discipline",
      subtext: "Automated UI, API, and Performance Engineering",
      tag: "CORE DISCIPLINE",
    },
    {
      value: "Enterprise CCM",
      label: "Customer Communications",
      subtext: "Regulated document delivery and batch workflows",
      tag: "SYSTEM SCALE",
    },
  ],

  skillGroups: [
    {
      title: "Test Automation",
      skills: [
        "Playwright",
        "Selenium",
        "Cypress",
        "Cucumber",
        "Robot Framework",
        "Tosca",
        "PyTest",
        "WebdriverIO",
      ],
    },
    {
      title: "Resilience & Performance",
      skills: [
        "Gremlin",
        "k6",
        "Locust",
        "JMeter",
        "Postman / Newman",
        "SoapUI",
        "Grafana",
        "LoadRunner",
        "WCAG 2.1",
      ],
    },
    {
      title: "Full-Stack & Languages",
      skills: [
        "TypeScript",
        "JavaScript",
        "Python",
        "React / Next.js",
        "FastAPI",
        "Express.js",
        "Ruby on Rails",
        "Tailwind CSS",
      ],
    },
    {
      title: "AI & Infrastructure",
      skills: [
        "Cloudflare AI Search",
        "Cloudflare Workers AI",
        "Vectorize",
        "Hugging Face",
        "Docker",
        "Jenkins",
        "AWS",
      ],
    },
  ],

  workHistory: [
    {
      role: "Principal Consultant",
      company: "Tenzing",
      period: "Dec 2025 - Present",
      location: "Melbourne, VIC",
      impactMetric: "Enterprise CCM Delivery",
      highlights: [
        "Built modular SmartCOMM templates and compliance rules for enterprise insurance.",
        "Integrated high-volume XML/JSON batch generation pipelines via REST APIs.",
        "Delivered multi-channel dispatch: interactive PDF, email, and SMS.",
      ],
      stack: [
        "SmartCOMM",
        "Advance Test Designer",
        "Data Modeler",
        "ECM",
        "XML/JSON",
        "REST APIs",
        "TypeScript",
      ],
    },
    {
      role: "Senior Consultant",
      company: "Datacom",
      period: "Oct 2022 - Dec 2025",
      location: "Melbourne, VIC",
      impactMetric: "Delivery & Regression",
      highlights: [
        "Built Ruby/Cucumber BDD test frameworks, cutting regression cycles by 60%.",
        "Automated multi-channel compliance validation across PDF, SMS, email, and fax.",
        "Developed tools and workbench for automated document generation, dispatching, and visual validation.",
      ],
      stack: ["Ruby on Rails", "Cucumber", "Python", "TypeScript", "React.js", "AWS", "SmartCOMM"],
    },
    {
      role: "Test Engineer",
      company: "PDAX (Philippine Digital Asset Exchange)",
      period: "Apr 2022 - Sep 2023",
      location: "Remote / Philippines",
      impactMetric: "Performance & Resilience",
      highlights: [
        "Built Locust and k6 performance suites to validate high-volume crypto trading APIs.",
        "Implemented e2e automation for crypto as a-service platform, reducing regression cycles by 30%.",
        "Embedded CI/CD pipelines for automated performance and regression testing, improving release velocity.",
      ],
      stack: ["Python", "Locust", "k6", "JavaScript", "TypeScript", "Docker", "AWS", "Playwright"],
    },
    {
      role: "Software Developer in Test (SDET)",
      company: "Planit Testing",
      period: "Mar 2020 - Sep 2022",
      location: "Melbourne, VIC",
      impactMetric: "Chaos & Banking E2E",
      highlights: [
        "Ran Gremlin chaos experiments to expose resilience gaps in payment microservices.",
        "Built E2E payment suites with Playwright & Tosca, reducing test cycles by 25%.",
        "Automated OpenAPI contract tests and audited WCAG 2.1 accessibility.",
      ],
      stack: ["Playwright", "Tosca", "Python", "Gremlin", "Jenkins", "WCAG 2.1"],
    },

    {
      role: "Test Architect",
      company: "Carlson Wagonlit Travel",
      period: "Jun 2015 - May 2019",
      location: "Philippines",
      impactMetric: "-50% Regression Time",
      highlights: [
        "Designed and implemented a full-stack test automation framework for enterprise travel booking.",
        "Engineered Selenium & Robot Framework suites, cutting regression time by 50%.",
      ],
      stack: ["Selenium", "Robot Framework", "Python", "JMeter", "Jenkins"],
    },
    {
      role: "QA Lead",
      company: "Finastra",
      period: "Jul 2011 - Apr 2015",
      location: "Philippines",
      impactMetric: "Framework & Performance",
      highlights: [
        "Automated regression suites for core banking and financial messaging under strict SLAs.",
        "Stress-tested database throughput and consistency during peak transaction windows.",
      ],
      stack: ["Selenium", "Robot Framework", "Java", "Jenkins"],
    },
  ],

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/jayson-panganiban",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jayson-panganiban/",
    },
    {
      name: "Email",
      url: "mailto:json.panganiban@gmail.com",
    },
    {
      name: "CV (PDF)",
      url: "/JaysonPanganiban_CV.pdf",
    },
  ],
};
