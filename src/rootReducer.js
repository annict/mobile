import { combineReducers } from "redux"

import homeReducer from "./containers/home/homeReducer"

const rootReducer = combineReducers({
  homeReducer,
})

export default rootReducer
