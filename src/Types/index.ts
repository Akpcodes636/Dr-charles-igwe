import { PortableTextBlock } from "@portabletext/types";


export interface Category {
  _id: string;
  title: string;
  slug?: string;
}

export interface Author {
  name: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

export interface Blogs {
  _id: string;
  title: string;
  slug?: string;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  excerpt?: string;
  description?: string;
  author?: string;
  categories?: Category[];
  publishedAt?: string;
  img?:string;
}

export interface FeaturedPost extends Blogs {
  highlight?: boolean;
  img?: string; 
}


export interface EventMedia {
  url: string;
  title?: string;
}

export interface Event {
  _id: string;
  title: string;
  slug?: string;
  date: string;
  location: string;
  img: string;
  description: PortableTextBlock[]; 

  galleryImages?: EventMedia[];
  videos?: EventMedia[];
}

export interface Category {
  _id: string;
  title: string;
  categorySlug?: {
    current: string;
  };
}


export interface Author {
  name: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

export interface Category {
  title: string;
  catergorySlug?: {
    current: string;
  };
}

export interface Blog {
  _id: string;
  title: string;
  slug?: {
    current: string;
  };
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  excerpt?: string;
  description?: string;
  author?: string;
  categories?: Category[];
  publishedAt?: string;
  body?: PortableTextBlock[];
  img?: string;
}


export interface FiresideChat {
  _id: string
  title: string
  speakerName: string
  speakerPosition: string
  imageUrl: string
  date: string
  tagline: string
  registrationLink: string
}