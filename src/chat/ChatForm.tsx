import React, {useState} from 'react';
import {Chat} from './Chat.ts';
import ChatService from "./ChatService.tsx";

interface ChatFormProps {
    sessionId: string;
    onChatCreate: () => void;
}

const ChatForm: React.FC<ChatFormProps> = ({sessionId, onChatCreate}) => {
    const [text, setText] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newChat: Chat = {
            chat_id: '',
            session_id: sessionId,
            text,
            is_client: true,
            created_at: new Date(),
        };

        try {
            const response = await ChatService.createChat(newChat);
            console.log('Created chat:', response);
            setText('');
            onChatCreate();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Create Chat</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Text:</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default ChatForm;
