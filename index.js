import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  Alert,
  View,
  Platform,
  StyleSheet,
} from 'react-native'
import codePush from 'react-native-code-push'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n'
  + 'Shake or press menu button for dev menu',
})


type Props = {};
class App extends Component<Props> {
  componentWillMount () {
    codePush.sync(
      { updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE },
      (syncStatus) => {
        Alert.alert(`status: ${syncStatus}`)
        switch (syncStatus) {
          case codePush.SyncStatus.UP_TO_DATE:
            Alert.alert('UP_TO_DATE')
            break
          case codePush.SyncStatus.UPDATE_INSTALLED:
            Alert.alert('UPDATE_INSTALLED')
            break
          case codePush.SyncStatus.UPDATE_IGNORED:
            Alert.alert('UPDATE_IGNORED')
            break
          case codePush.SyncStatus.UNKNOWN_ERROR:
            Alert.alert('UNKNOWN_ERROR')
            break
          case codePush.SyncStatus.SYNC_IN_PROGRESS:
            Alert.alert('SYNC_IN_PROGRESS')
            break
          case codePush.SyncStatus.CHECKING_FOR_UPDATE:
            Alert.alert('CHECKING_FOR_UPDATE')
            break
          case codePush.SyncStatus.AWAITING_USER_ACTION:
            Alert.alert('AWAITING_USER_ACTION')
            break
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            Alert.alert('DOWNLOADING_PACKAGE')
            break
          case codePush.SyncStatus.INSTALLING_UPDATE:
            Alert.alert('INSTALLING_UPDATE')
            break
        }
      },
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
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
})


const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL }
AppRegistry.registerComponent('mjpet', () => codePush(codePushOptions)(App))
