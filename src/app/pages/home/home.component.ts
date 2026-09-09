import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: string[] = ['Todos', 'Cinema', 'Séries', 'Quadrinhos', 'Tech'];
  selectedCategory: string = 'Todos';
  searchTerm: string = '';

  featuredArticle?: Article;
  secondaryArticles: Article[] = [];
  filteredArticles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    const list = this.articleService.filterArticles(this.selectedCategory, this.searchTerm);
    this.filteredArticles = list;
    if (list.length > 0) {
      this.featuredArticle = list[0];
      this.secondaryArticles = list.slice(1);
    } else {
      this.featuredArticle = undefined;
      this.secondaryArticles = [];
    }
  }

  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    this.loadArticles();
  }

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.loadArticles();
  }

  clearFilters(): void {
    this.selectedCategory = 'Todos';
    this.searchTerm = '';
    this.loadArticles();
  }
}
