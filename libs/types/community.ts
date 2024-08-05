export interface RecentContributor {
  github_id: number;
  org?: string;
  user: string;
}

export interface SpotlightContributor {
  contributorName: string;
  url: string;
  quote: string;
}

export interface Issues {
  title: string;
  url: string;
  labels: string[];
}

export interface RecentContribution {
  number: number;
  title: string;
  updated_at: string;
  url: string;
  repo: string;
}

export interface CommunityHyData {
  contributorSpotlight?: SpotlightContributor[];
  goodFirstIssues: Issues[];
}
