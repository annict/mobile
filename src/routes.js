import { StackNavigator, TabNavigator, TabBarBottom, NavigationActions } from "react-navigation"

import { MainTabNavigator } from "./navigators"

export const Annict = StackNavigator({
  Main: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
})
