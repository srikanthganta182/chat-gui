import React, {useEffect, useState} from 'react';
import ChatService from "./ChatService.tsx";
import ChatItem from "./ChatItem.tsx";
import {Chat} from "./Chat.ts";

interface ChatListProps {
    sessionId: string;
    refreshCount: number;
}

const ChatList: React.FC<ChatListProps> = ({sessionId, refreshCount}) => {
    const [chats, setChats] = useState<Chat[]>([]);

    const fetchChats = async () => {
        try {
            // could be cached, I think
            const response = await ChatService.getChatsForSession(sessionId);
            setChats(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchChats();
    }, [sessionId, refreshCount]);

    return (
        <div>
            <h2>Chats</h2>
            {chats.map((chat) => (
                <ChatItem key={chat.chat_id} chat={chat}/>
            ))}        </div>
    );
};

export default ChatList;

