/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, NativeModules} from 'react-native';

const ScannerModule = NativeModules.ScannerModule;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      barcodeRead: '-'
    }
  }


  onBarcodeRead = (barcode) => {
    this.setState({
      barcodeRead : barcode
    })
  }

  render = () => {
    var barcodeTypes = null //['QR_CODE', 'DATA_MATRIX'];

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
            onPress={() => ScannerModule.openCustomScanner(true, true, barcodeTypes, this.onBarcodeRead)}
            title='Custom Scanner'
          />

          <Button
            onPress={() => ScannerModule.openScanner(true, "teste", this.onBarcodeRead)}
            title='Scanner'
          />
          <Text style={styles.barcode}>{this.state.barcodeRead}</Text>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  barcode: {
    fontSize: 25,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5
  }
});

export default App
