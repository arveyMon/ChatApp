export enum Sender {
  User = 'User',
  Bot = 'Bot',
}

export type Message = {
  id: string;
  text: string;
  from: Sender;
  timeStamp: number;
};
