import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, BackHandler} from 'react-native';
import Login from './Login'
import { AccessToken } from 'react-native-fbsdk';

export default class App extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    return true;
  }

  render() {
      
    AccessToken.getCurrentAccessToken().then(
      (data) => {
          console.log(data.accessToken)
          this.props.navigation.navigate('PumpsList')
      }
    )

    return (
      <View style={styles.container}>
          <View style={styles.container} >
            <Text style={styles.welcome}>Login to continue !!</Text>
            <Login />
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
