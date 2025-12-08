export interface Author {
  id: string;
  name: string;
  bio: string;
  fullBio: string;
  style: string;
  imageUrl: string;
  social?: {
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  authorId: string;
  coverUrl: string;
  publishDate: string;
  genre: string;
  pages: number;
  reviews: Review[];
  buyUrl?: string;
  language?: string;
  rating?: number;
  fileSize?: string;
  edition?: string;
  price?: string;
}

export const authors: Author[] = [
  {
    id: '1',
    name: 'Alissa M.R. Eldridge',
    bio: 'Author of The Pendant Legacy series, exploring themes of transformation, identity, and emotional realism.',
    fullBio: 'Alissa M.R. Eldridge is the author of The Pendant Legacy trilogy, a series that delves into gender, transformation, reality rewriting, and emotional authenticity. Her work is known for its deep introspection and exploration of complex characters navigating life-altering changes.',
    style: 'Transformation Drama, Magical Realism, Emotional',
    imageUrl: 'https://placehold.co/400x400/e2e8f0/1e293b?text=Alissa+Eldridge',
    social: {
      instagram: 'https://www.instagram.com/rbentertainmemtworks/',
    }
  }
];

export const books: Book[] = [
  {
    id: '1',
    title: 'A Beautiful Deception',
    description: 'When Mat receives a mysterious pendant, he’s thrust into a world where reality reshapes around him — and within him.',
    longDescription: 'When Mat receives a mysterious pendant from a close friend, he’s thrust into a world where reality reshapes around him — and within him. Transformed into a young Latina woman named Isabel, Mat must navigate the emotional labyrinth of identity, memory, and self-worth while the world insists she has always been this way. Only one person remembers the truth… and even that memory is beginning to fade. A Beautiful Deception is a powerful, emotionally raw story about change, love, and the price of becoming who you never expected to be.',
    authorId: '1',
    coverUrl: '/a-beautiful-deception.png',
    publishDate: '2025-01-16',
    genre: 'Transformation Drama',
    pages: 109,
    reviews: [],
    buyUrl: 'https://www.amazon.com/dp/B0DTBL1S5S',
    language: 'English',
    rating: 5,
    fileSize: '8.5 MB',
    edition: '1st',
    price: '$15'
  },
  {
    id: '2',
    title: 'A Changed Parent',
    description: 'Isabel never imagined parenthood would become part of her rewritten life — especially not so soon after learning how to live in her own skin.',
    longDescription: 'Isabel never imagined parenthood would become part of her rewritten life — especially not so soon after learning how to live in her own skin. But when she becomes the mother of a newborn daughter, Rosa, she must discover how to nurture another life while still healing her own. Supported by her partner Gabriel, her loving family, and the woman whose name her daughter now carries, Isabel begins to understand the power of generational love, legacy, and chosen transformation. A Changed Parent is a heartfelt exploration of identity, family, and the quiet strength it takes to be both a daughter and a mother.',
    authorId: '1',
    coverUrl: '/a-changed-parent.png',
    publishDate: 'Coming Soon',
    genre: 'Family Fiction',
    pages: 0,
    reviews: []
  }
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find((author) => author.id === id);
}

export function getBookById(id: string): Book | undefined {
  return books.find((book) => book.id === id);
}

export function getBooksByAuthor(authorId: string): Book[] {
  return books.filter((book) => book.authorId === authorId);
}
