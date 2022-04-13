import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pages from './components/Pages/Pages';
import reportWebVitals from './reportWebVitals';
import LocalGrocer from './components/Pages/LocalGrocer';

ReactDOM.render(

  // <BrowserRouter>
  //   <Routes>

  //     <Route path="/" element={<App />}/>

  //     <Route path="localgrocer" element={<LocalGrocer />} />

  //   </Routes>
  // </BrowserRouter>,
  // document.getElementById('root')

  // <React.StrictMode>
  //   <HashRouter>
  //     <App />
  //   </HashRouter>
  // </React.StrictMode>,
  // document.getElementById('root')

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
