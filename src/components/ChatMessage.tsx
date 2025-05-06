import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Sender, Message} from '../types/message';

type Props = {
  message: Message;
};

export default function ChatMessage({message}: Props) {
  const isUSer = message.from === Sender.User;

  return <View style={[]}></View>;
}

const styles = StyleSheet.create({
  container: {},
});
