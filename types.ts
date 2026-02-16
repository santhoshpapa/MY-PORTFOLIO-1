
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  width?: string;
  height?: string;
  align?: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
