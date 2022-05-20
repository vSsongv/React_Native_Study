import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const iconSize = 30;
const iconColor = 'white';
const icons = [
  'home',
  'table-search',
  'face-profile-woman',
  'account-settings',
];
const BottomBar = () => {
  const children = icons.map(name => (
    <Icon key={name} name={name} size={iconSize} color={iconColor} />
  ));
  return <SafeAreaView style={[styles.flex]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: Colors.lightBlue500,
  },
});

export default BottomBar;
