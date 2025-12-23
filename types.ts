
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  ROADMAP = 'ROADMAP',
  PRACTICE_EXAM = 'PRACTICE_EXAM',
  TRAFFIC_SIGNS = 'TRAFFIC_SIGNS',
  AI_ASSISTANT = 'AI_ASSISTANT'
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'Signs' | 'Laws' | 'Safety' | 'General';
  image?: string;
}

export interface TrafficSign {
  id: number;
  name: string;
  category: 'Warning' | 'Regulatory' | 'Prohibitory' | 'Informational';
  imageUrl: string;
  meaning: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  actionLink?: string;
  icon: string;
}
