export type Service = {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon?: string;
  keywords: string[];
  image?: string;
  imageDark?: string;
};

export type City = {
  id: string;
  slug: string;
  name: string;
  zipCode: string;
  region: string;
  description: string;
  keywords: string[];
  servicesPerformedCount?: number;
};

export type ProjectRealization = {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  service: string; // service slug
  city: string; // city slug
  images: string[];
  beforeAfter?: {
    before: string;
    after: string;
  };
  details: {
    duration?: string;
    budget?: string;
    materials?: string[];
    challenges?: string[];
    result: string;
  };
  testimonial?: {
    author: string;
    text: string;
    rating: number;
  };
  keywords: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  category: string;
  tags: string[];
  content?: string;
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
};

export type SiteConfig = {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  ogImage: string;
  locale: string;
  business: {
    name: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    zipCode: string;
    city: string;
    country: string;
    socialProfiles: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      instagram?: string;
      google?: string;
    };
  };
};
