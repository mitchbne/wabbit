import React from "react"
import ReactDOM from "react-dom"
import "./css/styles.css"
import { BrowserRouter as Router } from "react-router-dom"

// Redux
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import rootReducer from "./redux/reducers/rootReducer"
import * as serviceWorker from "./serviceWorker"
import App from "./components/App" // eslint-disable-line import/no-unresolved

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById("root"))

serviceWorker.unregister()
