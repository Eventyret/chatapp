export class ChatMessage {
    $key?: string;
    email?: string;
    userName?: string;
    message?: string;
    photoUrl?: string;
    timeSent?: Date = new Date();
}