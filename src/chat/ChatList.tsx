import {useEffect, useState} from 'react';
import ChatItem from './ChatItem.tsx';
import ChatService from './ChatService.tsx';
import {Chat} from './chat';

const ChatList = () => {
    const [chats, setChats] = useState<Chat[]>([]);

    useEffect(() => {
        fetchChats();
    }, []);

    const fetchChats = async () => {
        try {
            const response = await ChatService.getChats();
            setChats(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Chat List</h2>
            {chats.map((chat) => (
                <ChatItem key={chat.chat_id} chat={chat}/>
            ))}
        </div>
    );
};

export default ChatList;
