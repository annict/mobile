import React from "react"
import { TabNavigator } from "react-navigation"
import Icon from "react-native-vector-icons/FontAwesome"

import { HomeGuestStackNavigator, SeasonalWorksStackNavigator } from "./"

export const MainTabNavigator = TabNavigator({
  Home: {
    screen: HomeGuestStackNavigator,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: <Icon color="#900" name="home" size={30} />,
    },
  },

  SeasonalWorks: {
    screen: SeasonalWorksStackNavigator,
    navigationOptions: {
      tabBarLabel: "Season",
    },
  },
})
