import React, {Component} from 'react';
import _ from 'lodash';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
const axios = require('axios');
import Login from './Login';

class PumpsList extends Component {

  static navigationOptions = ({ navigation }) => {
      return {
        header: null
      };
  };

  state = {
    text : "",
    list: null,
    response: null
  }

  _onTextChange = (text) => {
    this.setState({ text });
  }

  render() {
    return(
      <View style={{ backgroundColor: '#F5FCFF', display: 'flex', flex: 1 }} >
        <View style={{ backgroundColor: '#b9b9b9', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', elevation: 3 }} >
          <Text style={{ padding: 10, margin: 10, fontWeight: 'bold', fontSize: 15 }} >Search</Text>
          <TextInput
            style={{ backgroundColor: '#F5FCFF', display: 'flex', flex: 1, padding: 5, marginRight: 5 }}
            onChangeText={(text) => this._onTextChange( text )}
            />
          <Button title="Go" style={{ marginRight: 10 }} />
        </View>
    );
  }
}

export default PumpsList;
