import React, {useState} from 'react';
import ChatService from './ChatService.tsx';
import {Chat} from './chat';

const ChatForm: React.FC = () => {
    const [sessionID, setSessionID] = useState('');
    const [text, setText] = useState('');
    const [isClient, setIsClient] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newChat: Chat = {
            chat_id: '', // Generate the chat ID on the server side
            session_id: sessionID,
            text,
            is_client: isClient,
            created_at: new Date(),
        };

        try {
            const response = await ChatService.createChat(newChat);
            console.log('Created chat:', response);
            // Clear form fields
            setSessionID('');
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
                    <label>Session ID:</label>
                    <input
                        type="text"
                        value={sessionID}
                        onChange={(e) => setSessionID(e.target.value)}
                    />
                </div>
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
