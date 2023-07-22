import React, {useEffect, useState} from 'react';
import ChatService from "./ChatService";
import ChatItem from "./ChatItem";
import {Chat} from "./Chat";

interface ChatListProps {
    sessionId: string;
    refreshCount: number;
}

const ChatList: React.FC<ChatListProps> = ({sessionId, refreshCount}) => {
    const [chats, setChats] = useState<Chat[]>([]);
    const backendUrl = 'http://localhost:8081'; // Consider moving this to a config file

    const fetchChats = async () => {
        try {
            const response = await ChatService.getChatsForSession(sessionId);
            setChats(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchChats(); // Fetch chats on component mount

        const eventSource = new EventSource(`${backendUrl}/chat/sse?sessionId=${sessionId}`);

        eventSource.onmessage = (event) => {
            const newChat = JSON.parse(event.data);
            setChats((prevChats) => [...prevChats, newChat]);
        };

        return () => {
            eventSource.close();
        };
    }, [sessionId, refreshCount]); // Added refreshCount to dependencies

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
