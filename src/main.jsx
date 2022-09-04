import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter } from "react-router-dom";
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import RootReducer from './redux'

const store = createStore(RootReducer, composeWithDevTools())

ReactDOM.createRoot(
  document.getElementById('root'))
  .render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
)
