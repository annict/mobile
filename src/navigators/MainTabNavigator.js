import { TabNavigator } from "react-navigation"

import { HomeGuestStackNavigator, SeasonalWorksStackNavigator } from "./"

export const MainTabNavigator = TabNavigator({
  Home: {
    screen: HomeGuestStackNavigator,
    navigationOptions: {
      tabBarLabel: "Home",
    },
  },

  SeasonalWorks: {
    screen: SeasonalWorksStackNavigator,
    navigationOptions: {
      tabBarLabel: "Season",
    },
  },
})
