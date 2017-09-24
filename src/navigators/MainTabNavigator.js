import React from "react"
import { TabNavigator } from "react-navigation"
import Icon from "react-native-vector-icons/FontAwesome"
import { Button, Text, Footer, FooterTab } from "native-base"

import { colors } from "../config"
import { HomeGuestStackNavigator, SeasonalWorksStackNavigator } from "./"

export const MainTabNavigator = TabNavigator(
  {
    Home: {
      screen: HomeGuestStackNavigator,
    },

    SeasonalWorks: {
      screen: SeasonalWorksStackNavigator,
    },
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      const buttons = [
        {
          stateIndex: 0,
          screen: "Home",
          iconName: "home",
          text: "Home",
        },
        {
          stateIndex: 1,
          screen: "SeasonalWorks",
          iconName: "search",
          text: "Search",
        },
        {
          stateIndex: 2,
          screen: "SeasonalWorks",
          iconName: "pencil",
          text: "Track",
        },
        {
          stateIndex: 3,
          screen: "SeasonalWorks",
          iconName: "user",
          text: "Profile",
        },
        {
          stateIndex: 4,
          screen: "SeasonalWorks",
          iconName: "th",
          text: "More",
        },
      ].map(data => {
        return (
          <Button
            key={data.stateIndex}
            vertical
            active={props.navigationState.index === data.stateIndex}
            onPress={() => props.navigation.navigate(data.screen)}
          >
            <Icon color={colors.muted} name={data.iconName} size={28} />
            <Text style={{ fontSize: 10 }}>{data.text}</Text>
          </Button>
        )
      })

      return (
        <Footer>
          <FooterTab>{buttons}</FooterTab>
        </Footer>
      )
    },
  },
)
