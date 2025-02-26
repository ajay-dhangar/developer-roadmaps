import { ReactNode } from 'react';

export interface RoadmapItem {
  roadmaps: any;
  icon: ReactNode;
  id: string;
  title: string;
  description: string;
  subtopics: {
    title: string;
    description: string;
    content: string[];
  }[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  roadmaps: RoadmapItem[];
}