import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Realm from 'realm';
import RealmApp from './components/Auth/Auth';
import Navigator from './navigation/Navigator';

export default function App() {

  const app = RealmApp.getRealmApp();
  

  return (
    <Navigator>
      
    </Navigator>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
