import React, {useState} from 'react';
import ChatService from './ChatService';
import {Chat} from './Chat.ts';

interface ChatFormProps {
    sessionId: string;
}

const ChatForm: React.FC<ChatFormProps> = ({sessionId}) => {
    const [text, setText] = useState('');
    const [isClient, setIsClient] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newChat: Chat = {
            chat_id: '',
            session_id: sessionId,
            text,
            is_client: isClient,
            created_at: new Date(),
        };

        try {
            const response = await ChatService.createChat(newChat);
            console.log('Created chat:', response);
            setText('');
            setIsClient(false);
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
                <div>
                    <label>Is Client:</label>
                    <input
                        type="checkbox"
                        checked={isClient}
                        onChange={(e) => setIsClient(e.target.checked)}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default ChatForm;
