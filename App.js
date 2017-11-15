import React, { Component } from 'react';
import { Alert, Button, StatusBar, StyleSheet, ScrollView, Text, View } from 'react-native';
import { Constants } from 'expo'; // Import expo modules


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar barStyle='dark-content'/>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>        
            <View  style={styles.buttonAlert}>
              <Button
                onPress={() => { Alert.alert('You tapped the button!')}}
                title="Press Me"
              />
            </View>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>        
            <View  style={styles.buttonAlert}>
              <Button
                onPress={() => { Alert.alert('You tapped the button!')}}
                title="Press Me"
              />
            </View>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>        
            <View  style={styles.buttonAlert}>
              <Button
                onPress={() => { Alert.alert('You tapped the button!')}}
                title="Press Me"
              />
            </View>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>        
            <View  style={styles.buttonAlert}>
              <Button
                onPress={() => { Alert.alert('You tapped the button!')}}
                title="Press Me"
              />
            </View>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>        
            <View  style={styles.buttonAlert}>
              <Button
                style={{ color: '#000', }}
                onPress={() => { Alert.alert('You tapped the button!')}}
                title="Press Me"
              />
            </View>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>        
            <View  style={styles.buttonAlert}>
              <Button
                onPress={() => { Alert.alert('You tapped the button!')}}
                title="Press Me"
              />
            </View>
              <Text>Open up App.js to start working on your app!</Text>
              <Text>Changes you make will automatically reload.</Text>
              <Text>Shake your phone to open the developer menu.</Text>        
            <View  style={styles.buttonAlert}>
              <Button
                onPress={() => { Alert.alert('You tapped the button!')}}
                title="Press Me"
              />
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,

  },
  buttonAlert: {
    marginTop: 50,
  }
});
