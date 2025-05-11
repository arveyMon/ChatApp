// ChatMessage.tsx
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Message, Sender} from '../types/message';

type Props = {
  message: Message;
};

export default function ChatMessage({message}: Props) {
  return (
    <View
      style={[
        styles.messageContainer,
        message.from === Sender.User ? styles.user : styles.bot,
      ]}>
      <Text testID={`message-text-${message.from}`}>{message.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 4,
    padding: 8,
    borderRadius: 8,
  },
  user: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  bot: {
    alignSelf: 'flex-start',
    backgroundColor: '#EEE',
  },
});
