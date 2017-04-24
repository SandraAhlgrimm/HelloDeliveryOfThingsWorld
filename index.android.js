/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import codePush from "react-native-code-push";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class HelloDeliveryOfThingsWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World!!!!
        </Text>
        <Button title="Awesome Button"/>
      </View>
    );
  }
}

HelloDeliveryOfThingsWorld = codePush(codePushOptions)(HelloDeliveryOfThingsWorld);
export default HelloDeliveryOfThingsWorld;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloDeliveryOfThingsWorld', () => HelloDeliveryOfThingsWorld);
