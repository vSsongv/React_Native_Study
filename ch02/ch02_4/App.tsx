import React from 'react';
import {
  ScrollView,
  Alert,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default function App() {
  const onPress = () => Alert.alert('Home pressed', 'message');
  return (
    <ScrollView>
      <Button title="Home" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight onPress={onPress}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TextInput
        onChangeText={(text: string) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onEndEditing={() => console.log('onEditing')}
      />
    </ScrollView>
  );
}
