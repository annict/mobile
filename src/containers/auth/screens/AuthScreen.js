import { Button, Container, Content, Header, Icon, Left, Tab, Tabs } from "native-base"
import React, { Component } from "react"
import { connect } from "react-redux"
import { View, Text } from "react-native"

import { I18n } from "../../../config"
import { SignInScreen, SignUpScreen } from "./"

const mapStateToProps = state => ({})

class Auth extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header hasTabs="true">
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="ios-close" />
          </Button>
        </Left>
      </Header>
    ),
  })

  props: {
    navigation: Object,
  }

  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={I18n.t("noun.signUp")}>
            <SignUpScreen />
          </Tab>
          <Tab heading={I18n.t("noun.signIn")}>
            <SignInScreen />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export const AuthScreen = connect(mapStateToProps)(Auth)
