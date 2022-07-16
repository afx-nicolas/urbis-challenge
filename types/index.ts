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
