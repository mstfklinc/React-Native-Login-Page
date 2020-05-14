import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from "../components/Input";
import MyButton from "../components/MyButton";

export default class LoginForm extends Component {

  render() {
    return (
      <View>
          <Text style = {styles.signInText}> Sign In</Text>
          <Input
              returnKeyType = {"next"}
              placeholder='Username'
              autoCapitalize='none'
              onSubmitEditing = {() => this.passwordInput.focus()}
          />

          <Input
              secureTextEntry = {true}
              placeholder='Password'
              autoCapitalize='none'
              inputRef = {input => this.passwordInput = input}

          />
         <MyButton
             color = {"#f1f1f1"}
             backgroundColor = {"#0065e0"}
             text={"Sign In Now"}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    signInText : {
        marginVertical: 10,
        fontSize: 14,
        color: "#333"
    }

});
