import React from "react"
import ReactDOM from "react-dom"
import "./css/styles.css"
import App from "./components/App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router } from "react-router-dom"

// Redux
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootReducer from "../src/redux/reducers/rootReducer"
import thunk from "redux-thunk"

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
