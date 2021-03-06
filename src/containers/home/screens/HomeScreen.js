import { Button } from "native-base"
import React, { Component } from "react"
import { connect } from "react-redux"
import { View, Text } from "react-native"

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

class Home extends Component {
  props: {
    isAuthenticated: boolean,
    navigation: Object,
  }

  render() {
    const { isAuthenticated } = this.props

    const text = isAuthenticated ? "user" : "guest"

    return (
      <View>
        <Text>Hello {text}!</Text>
        <Button onPress={() => this.props.navigation.navigate("Auth")}>
          <Text>Sign Up!</Text>
        </Button>
      </View>
    )
  }
}

export const HomeScreen = connect(mapStateToProps)(Home)
