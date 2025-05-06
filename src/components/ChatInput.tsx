import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

type props = {
  onSend: (text: String) => void;
};

export default function ChatInput({onSend}: props) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Type a Message"
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', padding: 8},
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 8,
    paddingHorizontal: 8,
  },
});
