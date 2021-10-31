import React from 'react'
import ReactDOM from 'react-dom' //把寫好的元件畫到頁面上
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
