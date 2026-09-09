import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  article?: Article;
  relatedArticles: Article[] = [];
  notFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.loadArticle(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  private loadArticle(id: string | null): void {
    const found = this.articleService.getArticleById(id);
    if (found) {
      this.article = found;
      this.notFound = false;
      this.relatedArticles = this.articleService.getRelatedArticles(id, 3);
    } else {
      this.article = undefined;
      this.notFound = true;
      this.relatedArticles = [];
    }
  }
}
