import React, { Component } from "react"
import { connect } from "react-redux"
import { View, Text } from "react-native"

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

class SignUp extends Component {
  props: {
    isAuthenticated: boolean,
    navigation: Object,
  }

  render() {
    const { isAuthenticated } = this.props

    const text = isAuthenticated ? "user" : "guest"

    return (
      <View>
        <Text>Sign Up!</Text>
      </View>
    )
  }
}

export const SignUpScreen = connect(mapStateToProps)(SignUp)
