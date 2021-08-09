import { Article } from "../../entity/article";
import ArticleRepository from "../../interfaceAdapter/repository/articleRepository";
import {ArticleUseCase} from "../articleUseCase";

const articleRepository: ArticleRepository = {
  findAll() {
    throw "not implemented"
  }
}

// 単体テストの際は各レイヤーの責務にフォーカスし、レイヤーを超えた先の動作はモックにすることで、テスト対象の動作のみにフォーカスすることができる
// 今回のUseCaseではRepositoryから受け取った記事情報をそのまま返しているが、テストの際はRepositoryの動作をモックし、UseCase自体が適切な処理を行っているかを検証する
describe("#fetchArticles", () => {
  test("domain articles are returned(UseCaseがRepositoryのfindAllを呼び出したこと、Repositoryからの結果をそのまま返していること)", async() => {
    const article1 = {id: 1} as Article
    const article2 = {id: 2} as Article

    const findAllSpy = jest.spyOn(articleRepository, "findAll").mockReturnValue(new Promise(resolve => resolve([article1, article2])))

    const articleUseCase = new ArticleUseCase(articleRepository)

    expect(await articleUseCase.fetchArticles()).toEqual([article1, article2])

    expect(findAllSpy).toHaveBeenCalledTimes(1)
    findAllSpy.mockClear()
    findAllSpy.mockReset()
  })
})
