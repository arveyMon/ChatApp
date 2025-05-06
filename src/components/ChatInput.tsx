import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

type props = {
  onSend: (text: String) => void;
};

export default function ChatInput({onSend}: props) {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput value={text} onChangeText={setText} />
      <Button title="Send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', padding: 8},
});
