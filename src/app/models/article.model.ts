export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  photoCover: string;
  category: 'Cinema' | 'Séries' | 'Quadrinhos' | 'Games' | 'Tech';
  date: string;
  author: string;
  readTime: string;
}
