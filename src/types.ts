export interface Post {
  id: string;
  slug: string;
  publishDate: Date;
  title: string;
  description?: string;
  image?: string;
  canonical?: string | URL;
  permalink?: string;
  draft?: boolean;
  excerpt?: string;
  category?: string;
  tags?: Array<string>;
  author?: string;
  Content: unknown;
  content?: string;
  readingTime?: number;
  productId:number;
  radius?: string;
  rawCategory?:string;
}

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogTitle?: string;
  ogType?: string;
}
