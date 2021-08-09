import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './presenter/App';
import reportWebVitals from './reportWebVitals';
import { ArticleRepositoryImpl } from "./interfaceAdapter/repository/articleRepositoryImpl";
import { ArticleDriverImpl } from './infrastructure/articleDriver'
import { ArticleUseCase } from './useCase/articleUseCase'
const repository = new ArticleRepositoryImpl(new ArticleDriverImpl())
const useCase = new ArticleUseCase(repository)

ReactDOM.render(
  <React.StrictMode>
    <App useCase={useCase} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
