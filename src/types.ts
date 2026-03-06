export type Category = 'A' | 'B' | 'C';

export interface Article {
  id: string;
  article: string;
  location: string;
  description: string;
  stock: number;
  cost: number;
  category: Category;
}

export interface Inventory {
  id: string;
  date: string;
  concessionaire: string;
  branch: string;
  auditor: string;
  status: 'Abierto' | 'Cerrado';
  articles: Article[];
}

export interface User {
  id: string;
  name: string;
  role: string;
}
