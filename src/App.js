import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './root.store'
import { MobileApp } from './routes'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MobileApp />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Annict', () => App)
