import { StackNavigator } from "react-navigation"

import { AuthScreen } from "../containers/auth/screens"
import { HomeScreen } from "../containers/home/screens"

export const HomeStackNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Auth: {
      screen: AuthScreen,
    },
  },
  {
    mode: "modal",
  },
)
