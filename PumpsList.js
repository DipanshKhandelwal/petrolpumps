import React, {Component} from 'react';
import { View, Text } from 'react-native';

class PumpsList extends Component {

  static navigationOptions = ({ navigation }) => {
      return {
        header: null
      };
  };

  render() {
    return(
      <View style={{ backgroundColor: '#F5FCFF', display: 'flex', flex: 1 }} >
        <Text>
          PumpsList
        </Text>
      </View>
    );
  }
}

export default PumpsList;
