import React, { Component } from "react"
import { AppRegistry } from "react-native"
import { Provider } from "react-redux"

import configureStore from "./rootStore"
import { Annict } from "./routes"

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Annict />
      </Provider>
    )
  }
}

AppRegistry.registerComponent("Annict", () => App)
