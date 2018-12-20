import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Login from './Login'
import { AccessToken } from 'react-native-fbsdk';

export default class App extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  state = {
    user: null
  }

  render() {

    if(this.state.user == null) {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          console.log(data.accessToken)
          this.setState({ user: data.accessToken })
          this.props.navigation.navigate('PumpsList')
        }
      )
    }

    return (
      <View style={styles.container}>
          <View style={styles.container} >
            <Text style={styles.welcome}>Login to continue !!</Text>
            <Login loggedIn={()=>this.props.navigation.navigate('PumpsList')} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
});
