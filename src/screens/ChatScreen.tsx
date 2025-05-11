import React, {useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {Message} from '../types/message';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import {getBotReply} from '../utils/mockReply';
import uuid from 'react-native-uuid';
import {Sender} from '../types/message';

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (text: string) => {
    const userMessage: Message = {
      id: uuid.v4().toString(),
      text,
      from: Sender.User,
      timeStamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: uuid.v4().toString(),
        text: getBotReply(text),
        from: Sender.Bot,
        timeStamp: Date.now(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ChatMessage message={item} />}
        contentContainerStyle={styles.list}
      />
      <ChatInput onSend={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  list: {padding: 8},
});
