import Color from 'color';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={[style.safeAreaView]}>
      <Text style={[style.text]}>Hello World!</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeAreaView: {backgroundColor: Colors.blue500, flex: 1, margin: 10},
  text: {
    fontSize: 20,
    color: Color(Colors.blue500).lighten(0.9).string(),
    textAlign: 'center',
    margin: 50,
  },
});
