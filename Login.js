import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class Login extends Component { 

  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data)
                    if(this.props.loggedIn){
                      this.props.loggedIn()
                    }
                  }
                )
              }
            }
          }
          onLogoutFinished={() => {
            console.log("logout.")
            if(this.props.logout){
              this.props.logout()
            }
          }}/>
      </View>
    );
  }
}
