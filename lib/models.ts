export interface User {
  name: string;
  url: string;
  location: string;
  pinnedItems: PinnedItem[];
  repoLanguages: RepoLanguage[];
}

export interface PinnedItem {
  name: string;
  url: string;
  stars: number;
  forks: number;
  homepageUrl: string;
  description: string;
  topics: string[];
  languages: Language[];
}

export interface RepoLanguage {
  name: string;
  languages: Language[];
}

export interface Language {
  name: string;
  color: string;
}
