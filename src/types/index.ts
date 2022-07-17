export interface Credentials {
  email: string;
  password: string;
}

export interface Benefit {
  id: string;
  image: string;
  title: string;
  description: string;
  discount: string;
  rules: string;
  isOnline: boolean;
  url: string | null;
}

export interface BenefitFeedback {
  hasUsedBenefit?: boolean;
  rating?: 1 | 2 | 3 | 4 | 5;
  feedback?: string;
}
