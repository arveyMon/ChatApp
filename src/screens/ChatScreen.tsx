import React from 'react';
import {View} from 'react-native';
import ChatInput from '../components/ChatInput';
export default function ChatScreen() {
  const handleSend = (text: String) => {
    console.log(text);
  };

  return (
    <View style={{flex: 1, justifyContent: 'flex-end'}}>
      <ChatInput onSend={handleSend} />
    </View>
  );
}
