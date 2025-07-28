export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  techKey: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  companyKey: string;
  roleKey: string;
  locationKey: string;
  durationKey: string;
  descriptionKey: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}