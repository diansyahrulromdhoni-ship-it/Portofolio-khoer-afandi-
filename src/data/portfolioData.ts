import { Capability, ProcessStep, Project, ToolItem } from '../types';
import financeMockup from '../assets/images/finance_dashboard_mockup_1793941048345.jpg';
import brandMockup from '../assets/images/brand_identity_mockup_1793941041676.jpg';
import wellnessMockup from '../assets/images/wellness_companion_mockup_1793941040789.jpg';

export const PERSONAL_INFO = {
  fullName: 'KHOER AFANDI',
  shortName: 'Khoer Afandi',
  roles: ['DIGITAL DESIGNER', 'UI/UX DESIGNER', 'CREATIVE DESIGNER'],
  roleString: 'DIGITAL DESIGNER | UI/UX DESIGNER | CREATIVE DESIGNER',
  location: 'KP PANYIRAPAN',
  locationDisplay: 'KP Panyirapan',
  whatsapp: '083826970607',
  whatsappUrl: 'https://wa.me/6283826970607',
  email: 'khoerapandi307@gmail.com',
  tagline: 'KHOER AFANDI — CREATIVE DIGITAL EXPERIENCE.',
  brandConcept: 'CREATIVE DIGITAL EXPERIENCE.',
  availability: 'Open for Collaboration',
  avatarImage: '/assets/aistudio/IMG-20261104-WA0009_f2bdd012.jpg',
  brandLogo: '/assets/aistudio/IMG-20261106-WA0005_57a4725e.jpg',
};

export const STATISTICS = [
  {
    title: 'CREATIVE DESIGN',
    subtitle: 'Turning Ideas into Visual Impact',
    icon: 'Palette',
  },
  {
    title: 'UI/UX DESIGN',
    subtitle: 'Crafting Better User Experiences',
    icon: 'Layout',
  },
  {
    title: 'WEB DESIGN',
    subtitle: 'Building Modern Websites',
    icon: 'Globe',
  },
  {
    title: 'DIGITAL EXPERIENCE',
    subtitle: 'Creating Meaningful Connections',
    icon: 'Sparkles',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'finance-dashboard',
    number: '01',
    title: 'FINANCE DASHBOARD',
    categories: ['UI/UX DESIGN', 'WEB APPLICATION'],
    description: 'Modern financial dashboard featuring interactive charts, real-time data visualization, and an intuitive executive interface.',
    fullDescription: 'Designed an ultra-modern financial analytics SaaS dashboard engineered for clarity and rapid decision-making. The layout organizes portfolio balances, market movements, candlestick trading streams, and revenue insights into a coherent, dark glassmorphism system with high contrast and zero clutter.',
    image: financeMockup,
    client: 'FinTech Capital Global',
    year: '2026',
    deliverables: ['Dashboard UI Architecture', 'Real-Time Data Visualization', 'Interactive Micro-Components', 'Design System Library'],
    tools: ['Figma', 'UI/UX Design', 'Design Systems', 'Data Visualization'],
    metrics: [
      { label: 'Usability Score', value: '98%' },
      { label: 'Data Processing Speed', value: '<200ms' },
      { label: 'User Retention Boost', value: '+42%' },
    ],
    accentColor: '#38bdf8',
  },
  {
    id: 'brand-identity',
    number: '02',
    title: 'BRAND IDENTITY',
    categories: ['WEBSITE DESIGN', 'BRANDING'],
    description: 'Exclusive brand identity system with bespoke website mockups, modern typography, metallic finishes, and luxury visual storytelling.',
    fullDescription: 'Crafted a bespoke, futuristic corporate identity featuring the iconic geometric KA monogram foil-stamped on luxury matte black stationery and sleek interactive digital touchpoints. The project includes logo guidelines, grid systems, custom typography pairing, and physical mockups.',
    image: brandMockup,
    client: 'Kinetic Analytics & Luxury Tech',
    year: '2026',
    deliverables: ['Monogram & Logo Guidelines', 'Brand Typography System', 'Stationery & Packaging 3D Mockups', 'Digital Brand Guidelines'],
    tools: ['Canva', 'Studio AI', 'Brand Strategy', 'Visual Identity'],
    metrics: [
      { label: 'Brand Recognition', value: '+85%' },
      { label: 'Assets Delivered', value: '45+' },
      { label: 'Consistency Rating', value: '100%' },
    ],
    accentColor: '#60a5fa',
  },
  {
    id: 'wellness-companion',
    number: '03',
    title: 'WELLNESS COMPANION',
    categories: ['MOBILE APP DESIGN', 'HEALTH & LIFESTYLE'],
    description: 'Modern mobile app mockup featuring an elegant dark health dashboard with glowing biometric activity rings and sleep analytics.',
    fullDescription: 'Conceptualized and designed a companion mobile application that transforms personal wellness tracking into an empowering daily ritual. Features custom electric-blue circular activity rings, sleep stage breakdown, heart rate fluctuations, and minimalist tactile interactions.',
    image: wellnessMockup,
    client: 'BioVital Mobile Health',
    year: '2026',
    deliverables: ['Mobile App Flow & Wireframes', 'Dark Mode UI Components', 'Biometric Ring Visualizations', 'Interactive Mobile Prototypes'],
    tools: ['UI/UX Design', 'Prototyping', 'Mobile UX', 'Design Systems'],
    metrics: [
      { label: 'Screen Flows', value: '32 Screens' },
      { label: 'Task Completion Rate', value: '96%' },
      { label: 'User Satisfaction', value: '4.9/5' },
    ],
    accentColor: '#00d2ff',
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX DESIGN',
    description: 'Creating intuitive, user-centered interfaces that improve digital experiences and drive engagement.',
    iconName: 'Layout',
    highlights: ['User Research & Personas', 'Wireframing & Information Architecture', 'High-Fidelity Interface Design'],
  },
  {
    id: 'web-design',
    title: 'WEB DESIGN',
    description: 'Designing modern, responsive, and visually engaging websites tailored to elevate brands.',
    iconName: 'Monitor',
    highlights: ['Responsive Desktop & Mobile Layouts', 'Conversion-Optimized Landing Pages', 'Interactive Animations & Transitions'],
  },
  {
    id: 'branding',
    title: 'BRANDING',
    description: 'Building strong visual identities and memorable monograms that communicate core brand values.',
    iconName: 'Sparkles',
    highlights: ['Logo & Monogram Design', 'Color Palette & Typography Systems', 'Brand Guidelines & Asset Kits'],
  },
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    description: 'Creating visually compelling graphics, social media assets, and creative visual content.',
    iconName: 'Palette',
    highlights: ['Editorial Layouts & Posters', 'Digital Marketing Banners', 'Visual Storytelling Assets'],
  },
  {
    id: 'design-systems',
    title: 'DESIGN SYSTEMS',
    description: 'Developing consistent, accessible, and scalable design systems for seamless collaboration.',
    iconName: 'Layers',
    highlights: ['Tokenized Color & Type Scales', 'Reusable Component Libraries', 'Comprehensive Documentation'],
  },
  {
    id: 'prototyping',
    title: 'PROTOTYPING',
    description: 'Transforming ideas into interactive digital prototypes to test flows and validate concepts.',
    iconName: 'Workflow',
    highlights: ['Clickable User Journey Prototypes', 'Micro-Interactions & Transitions', 'Stakeholder Walkthroughs'],
  },
];

export const TOOLS: ToolItem[] = [
  {
    name: 'ChatGPT',
    category: 'Conversational AI & Ideation',
    role: 'Creative copy, design brief synthesis, and strategy brainstorms',
    iconColor: '#10a37f',
    badge: 'AI Assistant',
  },
  {
    name: 'Gemini',
    category: 'Multimodal Research',
    role: 'Visual trend analysis, UX research, and multilingual concept refinement',
    iconColor: '#3b82f6',
    badge: 'Multimodal AI',
  },
  {
    name: 'Studio AI',
    category: 'Generative Design Studio',
    role: 'Futuristic interface conceptualization, 3D asset generation & prototyping',
    iconColor: '#8b5cf6',
    badge: 'Generative Studio',
  },
  {
    name: 'Canva',
    category: 'Rapid Creative Production',
    role: 'Social media collateral, presentation decks, and rapid graphic layouts',
    iconColor: '#00c4cc',
    badge: 'Creative Suite',
  },
  {
    name: 'Flow AI',
    category: 'Workflow & Wireframing',
    role: 'Interactive user flow architecture and structured concept mapping',
    iconColor: '#f97316',
    badge: 'UX Flow Tool',
  },
  {
    name: 'Suno AI',
    category: 'Audio & Atmosphere',
    role: 'Bespoke ambient audio and soundscapes for cinematic digital showcases',
    iconColor: '#ec4899',
    badge: 'Audio Generative',
  },
  {
    name: 'Claude AI',
    category: 'Cognitive Strategy & UX Copy',
    role: 'Nuanced editorial copywriting, design rationale, and accessibility auditing',
    iconColor: '#d97706',
    badge: 'Cognitive Engine',
  },
  {
    name: 'CapCut',
    category: 'Video Editing & Motion',
    role: 'Dynamic showreel editing, video transition pacing, and short-form storytelling',
    iconColor: '#ffffff',
    badge: 'Motion Video',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understanding the project, target audience, brand vision, and core objectives through thorough discovery sessions.',
    deliverables: 'Project Brief, User Personas & Discovery Synthesis',
  },
  {
    step: '02',
    title: 'DEFINE',
    description: 'Researching design trends, mapping strategic user journeys, and developing structured information architecture.',
    deliverables: 'UX Strategy, Wireframes & Information Architecture',
  },
  {
    step: '03',
    title: 'DESIGN',
    description: 'Crafting beautiful, modern visual interfaces with custom typography, futuristic electric aesthetics, and cohesive systems.',
    deliverables: 'High-Fidelity UI Screens & Design System',
  },
  {
    step: '04',
    title: 'DEVELOP',
    description: 'Transforming visual concepts into interactive digital prototypes and responsive, developer-ready design specifications.',
    deliverables: 'Interactive Prototype & Component Specs',
  },
  {
    step: '05',
    title: 'DELIVER',
    description: 'Finalizing pixel-perfect assets, providing design handoff support, and ensuring high-quality creative execution.',
    deliverables: 'Production Asset Package & Client Handoff',
  },
];
