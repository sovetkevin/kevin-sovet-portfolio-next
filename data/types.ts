
export type LocalizedString = string | { en: string; fr: string };

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: LocalizedString;
  bottomLine: LocalizedString;
  valueAdd?: LocalizedString;
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
  content: LocalizedString;
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
  type: LocalizedString;
  date: string;
  thumbnail: string;
  description: LocalizedString;
  content?: LocalizedString;
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
