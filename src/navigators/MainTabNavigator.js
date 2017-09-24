import React from "react"
import { TabNavigator } from "react-navigation"
import Icon from "react-native-vector-icons/FontAwesome"
import { Button, Text, Footer, FooterTab } from "native-base"

import { colors, I18n } from "../config"
import { HomeStackNavigator, SeasonalWorksStackNavigator } from "./"

export const MainTabNavigator = TabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
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
          text: I18n.t("noun.home", { locale: "en" }),
        },
        {
          stateIndex: 1,
          screen: "SeasonalWorks",
          iconName: "search",
          text: I18n.t("verb.search", { locale: "en" }),
        },
        {
          stateIndex: 2,
          screen: "SeasonalWorks",
          iconName: "pencil",
          text: I18n.t("verb.track", { locale: "en" }),
        },
        {
          stateIndex: 3,
          screen: "SeasonalWorks",
          iconName: "user",
          text: I18n.t("noun.profile", { locale: "en" }),
        },
        {
          stateIndex: 4,
          screen: "SeasonalWorks",
          iconName: "th",
          text: I18n.t("noun.menu", { locale: "en" }),
        },
      ].map(data => {
        return (
          <Button
            key={data.stateIndex}
            vertical
            active={props.navigationState.index === data.stateIndex}
            onPress={() => props.navigation.navigate(data.screen)}
          >
            <Icon color={colors.muted} name={data.iconName} size={26} />
            <Text style={{ fontSize: 9 }}>{data.text}</Text>
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
