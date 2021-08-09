import { Article } from "../../entity/article";

export default interface ArticleRepository {
  findAll(): Promise<Article[]>
}
