import React from 'react';
import {Chat} from './chat';

interface ChatItemProps {
    chat: Chat;
}

const ChatItem: React.FC<ChatItemProps> = ({chat}) => {
    const createdAt = chat.created_at.toLocaleString(); // Convert Date to string representation

    return (<div>
            <h3>Chat ID: {chat.chat_id}</h3>
            <p>Session ID: {chat.session_id}</p>
            <p>Text: {chat.text}</p>
            <p>Is Client: {chat.is_client.toString()}</p>
            <p>Created At: {createdAt}</p>
        </div>
    );
};

export default ChatItem;
