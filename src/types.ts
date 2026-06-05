export type PersonaType = 'ai_engineer' | 'cybersecurity' | 'startup_founder' | 'tech_recruiter';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'ai' | 'cyber' | 'dev';
  featured: boolean;
}

export interface ResearchPaper {
  title: string;
  journal: string;
  publishedDate: string;
  abstract: string;
  focus: string;
  methodology: string;
  citations?: string;
  link?: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  description: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  score?: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
  category: 'cloud' | 'security' | 'ai' | 'general';
  featured: boolean;
}

export interface Hackathon {
  name: string;
  organizer: string;
  award?: string;
  description?: string;
}

export interface PortfolioData {
  name: string;
  fullName: string;
  roles: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  mission: string;
  strengths: string[];
  projects: Project[];
  research: ResearchPaper;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  hackathons: Hackathon[];
  community: {
    kaggleDataset: {
      title: string;
      link: string;
      description: string;
    };
    notes: string[];
  };
  brandStatements: Record<PersonaType, {
    heading: string;
    subheading: string;
    overview: string;
    values: string[];
    accentColor: string; // cyber-green, cyber-blue, cyber-purple, etc.
  }>;
}
