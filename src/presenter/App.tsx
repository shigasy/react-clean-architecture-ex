import React, { useState, useEffect } from 'react';
import './App.css';
import { ArticleUseCase } from '../useCase/articleUseCase'
import { Article } from '../entity/article';
type Props = {
  useCase: ArticleUseCase
}

const App = ({ useCase }: Props) => {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    fetchArticles()
  }, [])
  const fetchArticles = async () => {
    setArticles(await useCase.fetchArticles())
  }
  return <h1>ほげほげ {JSON.stringify(articles)} {articles.map((article) => (
    <span key={article.id}>
      {article.name}
    </span>
  ))}</h1>
}
export default App;
