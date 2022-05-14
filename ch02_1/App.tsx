import React from 'react';
import {Text} from 'react-native';
import * as D from './src/data';

const person = D.createRandomPerson();
export default function App() {
  return <Text>{JSON.stringify(person, null, 2)}</Text>;
}
