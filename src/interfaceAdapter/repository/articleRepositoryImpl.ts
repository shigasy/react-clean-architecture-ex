import { Article } from "../../entity/article";
import { Author } from "../../entity/author";
import ArticleDriver from "../../infrastructure/driver/articleDriver";
import ArticleRepository from "./articleRepository";

export class ArticleRepositoryImpl implements ArticleRepository {
  private readonly articleDriver: ArticleDriver

  constructor(driver: ArticleDriver) {
    this.articleDriver = driver
  }

  async findAll(): Promise<Article[]> {
    const res = await this.articleDriver.findAll()
    return res.articles.map((article) => new Article(article.id, article.name, new Author(article.author.id, article.author.name), new Date(article.createdAt)))
  }
}
