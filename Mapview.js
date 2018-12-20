import React, { Component } from "react";
import { View, Text } from 'react-native';

class Mapview extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          header: null
        };
    };

    render(){
        return(
            <View>
                <Text>
                    Wow
                </Text>
            </View>
        );
    }
}

export default Mapview;
