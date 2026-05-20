
export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
  bottomLine: string;
  valueAdd?: string;
  website?: string | string[];
  logo?: string[];
  subRoles?: { year: string; title: string }[];
  missionVia?: { label: string; company: string };
  isDraft?: boolean;
}

export interface LightningItem {
  icon: string;
  text: string;
}

export interface ProjectImage {
  url: string;
  caption?: string;
}

export type ContentBlockType = 'text' | 'carousel';

export interface TextContentBlock {
  type: 'text';
  content: string;
}

export interface CarouselContentBlock {
  type: 'carousel';
  images: ProjectImage[];
}

export type ContentBlock = TextContentBlock | CarouselContentBlock;

export interface Project {
  id: string;
  title: string;
  category: string[];
  type: string;
  date: string;
  thumbnail: string;
  description: string;
  content?: string;
  contentBlocks?: ContentBlock[];
  images?: ProjectImage[];
  scope: string[];
  stack?: string[];
  focus: string[];
  website?: string;
}

export interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  date: string;
  linkedin?: string;
}
