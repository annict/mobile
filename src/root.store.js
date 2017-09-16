import { createStore, applyMiddleware } from "redux"
import promiseMiddleware from "redux-promise"

import reducers from "./root.reducer"

export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(promiseMiddleware))
  return store
}
