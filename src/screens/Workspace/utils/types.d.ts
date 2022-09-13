/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ICardInfo {
  Icon: any;
  title: string;
  bgColor?: string;
  content: JSX.Element;
}

export interface IRequestGitHubProjects {
  name: string;
  description: string;
  html_url: string;
}

export interface IProjectCategory {
  type: 'personal' | 'professional' | 'none';
}

export interface IToggleCategory {
  category: 'personal' | 'professional';
  selectedCategory: IProjectCategory;
  setSelectedCategory: (setSelectedCategory: IProjectCategory) => void;
}
