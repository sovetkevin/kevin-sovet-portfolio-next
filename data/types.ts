
export type LocalizedString = string | { en: string; fr: string };

/** Agency / employer role vs client consultancy mission nested under an employment. */
export type ExperienceKind = 'employment' | 'mission';

export interface ExperienceItem {
  id: string;
  kind: ExperienceKind;
  /** For missions: id of the parent employment experience. */
  parentId?: string;
  year: LocalizedString;
  role: string;
  company: string;
  description: LocalizedString;
  bottomLine: LocalizedString;
  valueAdd?: LocalizedString;
  website?: string | string[];
  logo?: string[];
  subRoles?: { year: string; title: string }[];
  isDraft?: boolean;
}

export interface ExperienceGroup {
  employment: ExperienceItem;
  missions: ExperienceItem[];
}

export interface LightningItem {
  icon: string;
  text: string;
}

export interface ProjectImage {
  url: string;
  caption?: LocalizedString;
}

export type ContentBlockType = 'text' | 'carousel' | 'image';

export interface TextContentBlock {
  type: 'text';
  content: LocalizedString;
}

export interface CarouselContentBlock {
  type: 'carousel';
  images: ProjectImage[];
}

export interface ImageContentBlock {
  type: 'image';
  image: ProjectImage;
}

export type ContentBlock = TextContentBlock | CarouselContentBlock | ImageContentBlock;

export interface Project {
  id: string;
  title: string;
  category: string[];
  type: LocalizedString;
  date: string;
  thumbnail: string;
  description: LocalizedString;
  role?: LocalizedString;
  challenge?: LocalizedString;
  content?: LocalizedString;
  results?: LocalizedString;
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
  quote: LocalizedString;
  date: string;
  linkedin?: string;
}
