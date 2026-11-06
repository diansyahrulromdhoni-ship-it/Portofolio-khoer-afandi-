export interface Project {
  id: string;
  number: string;
  title: string;
  categories: string[];
  description: string;
  fullDescription: string;
  image: string;
  client: string;
  year: string;
  deliverables: string[];
  tools: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  role: string;
  iconColor: string;
  badge: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string;
}
