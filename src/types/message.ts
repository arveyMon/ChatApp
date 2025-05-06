export enum Sender {
    User = 'User',
    Bot = 'Bot'
}

export type Message = {
    id : String;
    text: String;
    from: Sender;
    timeStamp: number;
}