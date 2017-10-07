import React, { Component } from "react"
import { connect } from "react-redux"
import { View, Text } from "react-native"

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

class SignIn extends Component {
  props: {
    isAuthenticated: boolean,
    navigation: Object,
  }

  render() {
    const { isAuthenticated } = this.props

    const text = isAuthenticated ? "user" : "guest"

    return (
      <View>
        <Text>Sign In!</Text>
      </View>
    )
  }
}

export const SignInScreen = connect(mapStateToProps)(SignIn)
