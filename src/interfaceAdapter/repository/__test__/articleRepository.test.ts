import ArticleDriver, {ArticlesJson} from '../../../infrastructure/driver/articleDriver'
import {ArticleDriverImpl} from '../../../infrastructure/articleDriver'
import {ArticleRepositoryImpl} from "../articleRepositoryImpl";
import { Article } from '../../../entity/article';
import { Author } from '../../../entity/author';

const articleDriver:ArticleDriver  = {
  findAll() {
    throw "not implemented"
  }
}

// repositoryImplのコンストラクターにmockされたdriverを渡してあげることで単体でテスト可能
describe("#findAll", () => {
  test("domain articles are returned", async () => {
    const articles: ArticlesJson = {
      articles: [
        {
          id: 1,
          name: "articleName",
          author: {
            id: 2,
            name: "authorName"
          },
          createdAt: "2019-01-01T00:00:00.000Z"
        }
      ]
    };
    const findAllSpy = jest
      .spyOn(articleDriver, "findAll")
      .mockReturnValue(new Promise(resolve => resolve(articles)));

    const articleRepository = new ArticleRepositoryImpl(articleDriver)

    expect(await articleRepository.findAll()).toEqual([
      new Article(
        1,
        "articleName",
        new Author(2, "authorName"),
        new Date("2019-01-01")
      )
    ]);

    expect(findAllSpy).toHaveBeenCalledTimes(1);
    findAllSpy.mockClear();
    findAllSpy.mockReset();
  })
})
