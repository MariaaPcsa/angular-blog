import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { dataFake } from '../data/dataFake';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = dataFake;

  getArticles(): Article[] {
    return this.articles;
  }

  getArticleById(id: string | null): Article | undefined {
    if (!id) return undefined;
    return this.articles.find(article => article.id === id);
  }

  filterArticles(category?: string, searchTerm?: string): Article[] {
    return this.articles.filter(article => {
      const matchCategory = !category || category === 'Todos' || article.category.toLowerCase() === category.toLowerCase();
      const matchSearch = !searchTerm ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }

  getRelatedArticles(currentId: string | null, limit: number = 3): Article[] {
    return this.articles
      .filter(article => article.id !== currentId)
      .slice(0, limit);
  }
}
