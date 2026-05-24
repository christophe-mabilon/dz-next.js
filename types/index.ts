export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoContentBlock = {
  title: string;
  content: string;
};

export type GeoCoordinates = {
  latitude: number;
  longitude: number;
};

export type Service = {
  id: string;

  slug: string;

  name: string;

  shortName?: string;

  description: string;

  shortDescription?: string;

  longDescription: string;

  introduction?: string;

  icon?: string;

  image?: string;

  imageDark?: string;

  heroImage?: string;

  galleryImages?: string[];

  seoTitle?: string;

  seoDescription?: string;

  seoVariations?: string[];

  keywords: string[];

  relatedKeywords?: string[];

  benefits?: string[];

  processSteps?: string[];

  commonProjects?: string[];

  materials?: string[];

  faq?: SeoFaq[];

  contentBlocks?: SeoContentBlock[];

  internalLinks?: {
    title: string;
    href: string;
  }[];

  featured?: boolean;
};

export type City = {
  id: string;

  slug: string;

  name: string;

  zipCode: string;

  region: string;

  department?: string;

  description: string;

  introduction?: string;

  seoTitle?: string;

  seoDescription?: string;

  seoVariations?: string[];

  keywords: string[];

  relatedKeywords?: string[];

  population?: string;

  coordinates?: GeoCoordinates;

  nearbyCities?: string[];

  neighborhoods?: string[];

  landmarks?: string[];

  terrainTypes?: string[];

  commonProjects?: string[];

  commonIssues?: string[];

  architectureStyles?: string[];

  climateFeatures?: string[];

  servicesPerformedCount?: number;

  faq?: SeoFaq[];

  contentBlocks?: SeoContentBlock[];

  featured?: boolean;
};

export type ProjectRealization = {
  id: string;

  slug: string;

  title: string;

  shortDescription: string;

  description: string;

  service: string;

  city: string;

  images: string[];

  coverImage?: string;

  beforeAfter?: {
    before: string;
    after: string;
  };

  details: {
    duration?: string;

    budget?: string;

    surface?: string;

    materials?: string[];

    challenges?: string[];

    technologies?: string[];

    result: string;
  };

  testimonial?: {
    author: string;

    text: string;

    rating: number;

    city?: string;
  };

  seoTitle?: string;

  seoDescription?: string;

  keywords: string[];

  relatedProjects?: string[];

  publishedAt?: string;

  featured?: boolean;
};

export type BlogPost = {
  slug: string;

  title: string;

  seoTitle?: string;

  description: string;

  seoDescription?: string;

  excerpt?: string;

  date: string;

  updatedAt?: string;

  author: string;

  image?: string;

  coverImage?: string;

  category: string;

  tags: string[];

  keywords?: string[];

  readingTime?: number;

  featured?: boolean;

  content?: string;

  faq?: SeoFaq[];

  relatedPosts?: string[];
};

export type Review = {
  id: string;

  author: string;

  city?: string;

  rating: number;

  text: string;

  date: string;

  verified: boolean;

  service?: string;

  projectType?: string;

  featured?: boolean;
};

export type SiteConfig = {
  siteName: string;
  siteDescription: string;

  defaultTitle?: string;

  titleTemplate?: string;

  siteUrl: string;

  ogImage: string;

  locale: string;

  defaultKeywords?: string[];

  defaultRobots?: string;

  companyFoundedYear?: number;

  business: {
    name: string;

    legalName?: string;

    description: string;

    slogan?: string;

    phone: string;

    email: string;

    address: string;

    zipCode: string;

    city: string;

    region?: string;

    country: string;

    vatNumber?: string;

    siret?: string;

    coordinates?: GeoCoordinates;

    openingHoursSpecification?: {
      dayOfWeek: string;
      opens: string;
      closes: string;
    }[];

    openingHoursDisplay?: {
      day: string;
      hours: string;
    }[];

    paymentMethods?: string[];

    priceRange?: string;

    serviceArea?: string[];

    socialProfiles: {
      facebook?: string;

      twitter?: string;

      linkedin?: string;

      instagram?: string;

      google?: string;

      youtube?: string;

      tiktok?: string;
    };
  };
};
