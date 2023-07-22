import React, {useEffect, useState} from 'react';
import ChatItem from "./ChatItem.tsx";
import {Chat} from "./Chat.ts";

interface ChatListProps {
    sessionId: string;
}

const ChatList: React.FC<ChatListProps> = ({sessionId}) => {
    const [chats, setChats] = useState<Chat[]>([]);
    const backendUrl = 'http://localhost:8081'; // Consider moving this to a config file

    useEffect(() => {
        const eventSource = new EventSource(`${backendUrl}/chat/sse`);

        eventSource.onmessage = (event) => {
            const newChat = JSON.parse(event.data);
            if (newChat.session_id === sessionId) {  // only add messages from this session
                setChats((prevChats) => [...prevChats, newChat]);
            }
        };

        return () => {
            eventSource.close();
        };
    }, [sessionId, setChats]);

    return (
        <div>
            <h2>Chats</h2>
            {chats.map((chat) => (
                <ChatItem key={chat.chat_id} chat={chat}/>
            ))}
        </div>
    );
};

export default ChatList;
