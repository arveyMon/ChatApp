import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import ChatScreen from '../screens/ChatScreen';

jest.useFakeTimers();

describe('ChatScreen', () => {
  it('sends user message and receives bot reply', async () => {
    const {getByPlaceholderText, getByText, getByTestId, queryByTestId} =
      render(<ChatScreen />);

    const input = getByPlaceholderText('Type a Message');
    const sendButton = getByText('Send');

    fireEvent.changeText(input, 'Hi');
    fireEvent.press(sendButton);

    await waitFor(() => {
      expect(getByTestId('message-text-User')).toHaveTextContent('Hi');
    });

    expect(queryByTestId('message-text-Bot')).toBeNull();

    await act(async () => {
      jest.advanceTimersByTime(5000);
    });

    await waitFor(() => {
      expect(getByTestId('message-text-Bot')).toBeTruthy();
    });
  });
  it('does not send empty messages', async () => {
    const {getByPlaceholderText, getByText, queryByText} = render(
      <ChatScreen />,
    );

    const input = getByPlaceholderText('Type a Message');
    const sendButton = getByText('Send');

    // Try sending an empty message
    fireEvent.changeText(input, '');
    fireEvent.press(sendButton);

    // Assert that no message is rendered
    expect(queryByText('')).toBeNull();
  });
});
