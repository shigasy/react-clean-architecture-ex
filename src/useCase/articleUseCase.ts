import { Article } from "../entity/article";
import ArticleRepository from "../interfaceAdapter/repository/articleRepository";


  // interfaceの型、明示しなかったら返り値違っても通るのなんかなぁ...
  // バグの元になりそう
export class ArticleUseCase {
  readonly articleRepository: ArticleRepository
  constructor(repository: ArticleRepository) {
    this.articleRepository = repository
  }

  async fetchArticles(): Promise<Article[]>{
    return await this.articleRepository.findAll()
  }
}
