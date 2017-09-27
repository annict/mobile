import { combineReducers } from "redux"

import authReducer from "./containers/auth/authReducer"
import homeReducer from "./containers/home/homeReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
})

export default rootReducer
