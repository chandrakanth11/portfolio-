import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Chandrakantha CV",
  fullName: "Chandrakantha Acharya C V",
  roles: [
    "AI Developer",
    "Cybersecurity Specialist",
    "Computer Forensics Researcher",
    "Full Stack Engineer"
  ],
  location: "Davangere, Karnataka, India",
  email: "chandrakantha@gmail.com",
  phone: "+91 7892660252",
  linkedin: "https://linkedin.com/in/chandrakantha-c-910161a0",
  github: "https://github.com/chandrakanth11",
  
  summary: "Computer Science Engineering student specializing in AI/ML engineering, high-integrity secure systems, and kernel-layer AI integration. Actively engaged in pioneering machine learning healthcare research, white-hat security diagnostics, and custom system firmware development.",
  mission: "To engineer secure, intelligent, and low-latency computer systems by combining the threat-prevention principles of Cybersecurity with the adaptive capabilities of Artificial Intelligence.",
  
  strengths: [
    "Passionate about secure engineering, offensive/defensive security diagnostics, and low-level firmware integration.",
    "Proven experience building machine learning pipelines, deep computer vision systems, and full-stack cloud configurations.",
    "Highly specialized foundation in computer science research and autonomous embedded systems.",
    "Driven to build secure, robust, and horizontally scalable technology architectures that benefit human safety."
  ],
  
  experience: [
    {
      company: "EduTantar",
      location: "Bangalore, India (Remote)",
      role: "AI/ML Engineer Intern",
      start: "Oct 2025",
      end: "Jan 2026",
      description: [
        "Architected computer vision model pipelines for complex multi-object recognition tasks.",
        "Created proof-of-concept secure model orchestration systems to defend against prompt injection and model reverse engineering.",
        "Integrated AI components into practical commercial application stacks, reducing inference latencies by 20% using pipeline parallelization."
      ],
      skills: ["Generative AI", "Computer Vision", "Deep Learning", "Model Hardening", "Python", "OpenCV"]
    }
  ],
  
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Jain Institute of Technology",
      location: "Davangere, Karnataka, India",
      period: "2024 – 2027",
      score: "Active Pursuit",
      highlights: [
        "Specializing in Artificial Intelligence and System-level Computer Security.",
        "Lead Researcher in machine learning applications for clinical fetal health diagnostics.",
        "Active member of the Academic Tech Board and hackathon leadership team."
      ]
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Bapuji Polytechnic",
      location: "Davangere, Karnataka, India",
      period: "2018 – 2022",
      score: "Distinction",
      highlights: [
        "Acquired deep foundations in low-level compilation, C programming, object-oriented Java, and relational database systems.",
        "Pioneered student-led seminars on Operating Systems architecture and network diagnostics.",
        "Active leader in the Techno-Art Society."
      ]
    },
    {
      degree: "High School (General Science)",
      institution: "Kallamma High School",
      location: "Bhaddhurgatta, Karnataka, India",
      period: "2012 – 2013",
      highlights: ["Strong foundation in mathematics and logical computing theories", "Elected Student Council Coordinator"]
    }
  ],
  
  research: {
    title: "Detection of Perinatal Oxygen Deprivation Using Cardiotocography Signals: A Machine Learning Approach",
    journal: "International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE)",
    publishedDate: "May 2026",
    focus: "Healthcare Diagnostics / Deep Physiological Signal Processing",
    methodology: "Engineered a Python-based preprocessing and feature-matching pipeline for low-frequency cardiotocography (CTG) waves. Trained Random Forest, XGBoost, and deep convolutional networks to identify fetal hypoxia / oxygen deprivation ahead of clinical thresholds. Achieved state-of-the-art diagnostic recall rate (94.2%) on clinical benchmarks.",
    abstract: "Perinatal oxygen deprivation (birth asphyxia) represents a critical event requiring immediate medical response. This study introduces an automated machine learning approach to analyze complex multi-channel Cardiotocography signals. By leveraging advanced spectral analysis and tree-based ensemble estimators, the model successfully translates raw fetal heart rate fluctuations and uterine contractions into micro-second risk scores, empowering neonatal clinicians with preventative, screen-side warning indicators.",
    citations: "IJIRCCE-2026-CS-88913",
    link: "http://www.ijircce.com"
  },
  
  projects: [
    {
      id: "proj_red_os",
      title: "RED OS",
      subtitle: "Custom AI-powered secure operating system prototype",
      description: "A customized prototype kernel layer featuring a context-aware LLM command processor with a persistent local memory state, demonstrating low-level AI-firmware integration.",
      details: [
        "Designed context-saving memory buffer systems inside a prototype shell system to hold transient user state.",
        "Synthesized hardware-interrupt handlers and custom boot-time drivers for basic video memory management in assembly and C.",
        "Constructed a secure, sandboxed command shell that routes inputs through a local model daemon with secure token authorization."
      ],
      tech: ["Operating Systems", "C Language", "Assembly", "Secure Computing", "Interrupt Handling"],
      category: "ai",
      featured: true
    },
    {
      id: "proj_eye_detector",
      title: "Eye-ditector",
      subtitle: "Real-time edge micro-computer sleep prevention tracker",
      description: "An advanced computer vision application using thermal and RGB streams designed to analyze blink rates, track eye micro-movements, and trigger alarms on high-risk driver fatigue.",
      details: [
        "Utilized MediaPipe face mesh coordinates to track pupil dilation vector arrays under sub-optimal ambient light.",
        "Engineered custom Eye Aspect Ratio (EAR) formulas to measure blink triggers and dynamic drowsiness curves in real-time.",
        "Configured a low-footprint Python daemon running on a single CPU core, keeping system overhead under 7.5% CPU usage."
      ],
      tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Edge Processing"],
      category: "ai",
      featured: true
    },
    {
      id: "proj_face_attendance",
      title: "Face Attendance Core",
      subtitle: "Enterprise-grade facial recognition check-in panel",
      description: "Automated check-in ledger using local facial recognition vectors, robust administration controls, and security audits to avoid replay or photo-spoofing attacks.",
      details: [
        "Created an anti-spoofing visual analysis layer using passive eye-blink verification before adding the attendance timestamp.",
        "Built a modular, responsive management dashboard using lightweight Flask, persisting hashed user telemetry securely in SQLite.",
        "Implemented secure JWT session tokens and visual cipher signatures to shield the administration panel from unauthenticated requests."
      ],
      tech: ["Python", "Flask", "OpenCV", "SQLite", "JWT Security", "Passive Liveness Tracking"],
      category: "cyber",
      featured: true
    },
    {
      id: "proj_book_finder",
      title: "Intelligent Book Finder",
      subtitle: "Semantic research helper and catalog parser",
      description: "A query crawler and semantic retrieval engine that leverages the Google Books API coupled with simple sentiment-relevance filters.",
      details: [
        "Wrote an API client class with built-in query-throttling buffers to prevent API lockouts and manage rate boundaries.",
        "Built an interactive visual search index using modern UI frames with high-contrast text rendering of literary Metadata.",
        "Integrated client-side keyword-weighting algorithms to cluster search matches based on topical themes."
      ],
      tech: ["Python", "Google Books API", "REST Architecture", "Semantic Clustering"],
      category: "dev",
      featured: false
    }
  ],
  
  certifications: [
    {
      name: "Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2026",
      category: "cloud",
      featured: true
    },
    {
      name: "GenAI 101: Mastering LLMs",
      issuer: "Google / Skillsoft",
      year: "2025",
      category: "ai",
      featured: true
    },
    {
      name: "AI Agents with Google & Kaggle",
      issuer: "Kaggle",
      year: "2025",
      category: "ai",
      featured: true
    },
    {
      name: "Cyber Security Certification",
      issuer: "DROP Organization",
      year: "2022",
      category: "security",
      featured: true
    },
    {
      name: "Certified Information Security Manager (CISM Prep)",
      issuer: "Information Security Governance Group",
      year: "2022",
      category: "security",
      featured: true
    },
    {
      name: "Computer Forensics & Counterterrorism",
      issuer: "DROP Certified Security Course",
      year: "2022",
      category: "security",
      featured: true
    },
    {
      name: "Regulatory Compliance and AI",
      issuer: "Skillsoft",
      year: "2025",
      category: "ai",
      featured: false
    },
    {
      name: "Network Fundamentals",
      issuer: "Arcade Training",
      year: "2023",
      category: "security",
      featured: false
    },
    {
      name: "Sololearn JS Certificate",
      issuer: "SoloLearn",
      year: "2021",
      category: "general",
      featured: false
    },
    {
      name: "SOIC Financial Freedom Course",
      issuer: "SOIC",
      year: "2022",
      category: "general",
      featured: false
    }
  ],
  
  hackathons: [
    {
      name: "IIT Hyderabad National AI/ML Hackathon",
      organizer: "Indian Institute of Technology, Hyderabad",
      award: "Finalist / Best Machine Learning Solver",
      description: "Engineered high-speed tabular health classification models on restricted cloud execution limits under 24 hours."
    },
    {
      name: "IIT Delhi Blueprint 6.0",
      organizer: "Indian Institute of Technology, Delhi",
      award: "Top Innovator",
      description: "Crafted a secure software agent utilizing localized LLM parsing to detect phishing scripts within developer projects."
    },
    {
      name: "NIT Silchar NITS Hacks 8.0",
      organizer: "National Institute of Technology, Silchar",
      award: "Best Cybersecurity Integration",
      description: "Deployed custom network packet analyzer daemon running alongside real-time alert UI with light bandwidth footprint."
    },
    {
      name: "NIT Agartala AYAM Tech Fest",
      organizer: "National Institute of Technology, Agartala",
      award: "First Runners-Up",
      description: "Competed in full-throttle speed coding and kernel optimization tracks focusing on caching performance."
    },
    {
      name: "V-HACK 1.0",
      organizer: "V-Hack Global Security",
      award: "Distinction in Computer Forensics",
      description: "Successfully solved digital forensic puzzles involving file carvers, hidden network telemetry, and memory dump injection vectors."
    }
  ],
  
  community: {
    kaggleDataset: {
      title: "Missile and Flight Detection Dataset",
      link: "https://www.kaggle.com/datasets/chandrakanth11/missile-and-flight-detection",
      description: "An annotated multi-spectra computer vision training dataset featuring over 3,000 thermal, infrared, and visible-spectrum frames designed to identify fast-moving aerial hazards."
    },
    notes: [
      "Active computer security learner, analyzing OWASP vulnerabilities and system hardware boundaries weekly.",
      "A technical contents contributor on LinkedIn, sharing knowledge on neural networks, system exploits, and secure infrastructure configurations.",
      "Kaggle Dataset Publisher, curating unique signal matrices to advance global research."
    ]
  },
  
  brandStatements: {
    ai_engineer: {
      heading: "Engineering Secure Cognitive Engines",
      subheading: "Where low-level system kernels meet deep neural networks",
      overview: "I engineer smart agents that run on high-performance constraints. My work blends real-time physiological signal analysis with lightweight deep learning, building secure local LLM wrappers and embedded computer vision pipelines.",
      values: [
        "Resource-constrained neural network efficiency (OpenCV, MediaPipe)",
        "System-level model security and prompt engineering boundaries",
        "Clinical diagnostic intelligence using physiological digital tracking (CTG)"
      ],
      accentColor: "cyber-blue"
    },
    cybersecurity: {
      heading: "Armoring the Cyber Perimeter",
      subheading: "Advanced computer forensics, low-level firmware security, and offensive systems analysis",
      overview: "With a background in computer forensics, digital ciphers, and ethical hacking tools (Burp Suite, Nmap), I build tech platforms using a 'Secure-by-Design' default. If a software system is not resistant to tampering, its utility is null.",
      values: [
        "Digital system forensics, filesystem carving, and memory-dump archaeology",
        "Resilient network micro-architectures and liveness authentication protocols",
        "Automated vulnerabilities testing (OWASP, XSS, rate-manipulation diagnostics)"
      ],
      accentColor: "cyber-green"
    },
    startup_founder: {
      heading: "Building Intelligent SaaS for Tomorrow",
      subheading: "Designing highly secured, feature-dense automated platforms for massive utility",
      overview: "I look at code through the lens of capital efficiency, user necessity, and absolute product reliability. I translate complex technological capabilities (Generative AI, advanced face mechanics, and cloud structures) into intuitive, high-value user engines.",
      values: [
        "Rapid prototype iteration from firmware layers to beautiful frontend cards",
        "Robust software design minimizing operational crashes and cloud subscription overhead",
        "Clear technical writing, published datasets, and research credibility that builds client trust"
      ],
      accentColor: "cyber-purple"
    },
    tech_recruiter: {
      heading: "Chandrakantha Acharya: System-Level Engineer",
      subheading: "Certified Google Cloud Architect, published AI researcher, and proven systems developer",
      overview: "A highly focused Computer Science student with a professional BE track record (2024-2027), a prior CS Diploma with Distinction (2018-2022), and numerous national hackathon awards from premium Indian institutes (IITs & NITs). Equipped with certified competence matching modern AI/ML and cloud challenges.",
      values: [
        "Certified Google Cloud Professional Cloud Architect ($180k+ standard benchmark value)",
        "Fully published machine learning researcher in peer-reviewed clinical journal (May 2026)",
        "Strong fundamental baseline in Core Java, Python, C programming, and Unix Shell script environments"
      ],
      accentColor: "cyber-blue"
    }
  }
};
