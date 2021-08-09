import ArticleDriver from "./driver/articleDriver";

export class ArticleDriverImpl implements ArticleDriver {
  async findAll() {
    const res = await fetch("http://localhost:3000/articles")
    return await res.json()
  }
}
