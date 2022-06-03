import {Platform, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native-paper';
import React, {useEffect} from 'react';
import type {LayoutChangeEvent} from 'react-native';

export default function LifeCycle() {
  useEffect(() => {
    console.log(Platform.OS, 'useEffect called');
    return () => console.log(Platform.OS, 'useEffect finished');
  }, []);

  return (
    <View>
      <Text>ggg</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
