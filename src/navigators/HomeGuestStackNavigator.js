import { StackNavigator } from "react-navigation"

import { HomeGuestScreen } from "../containers/home/screens"

export const HomeGuestStackNavigator = StackNavigator({
  HomeGuest: {
    screen: HomeGuestScreen,
  },
})
