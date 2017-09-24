import { StackNavigator } from "react-navigation"

import { HomeScreen } from "../containers/home/screens"

export const HomeStackNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
})
