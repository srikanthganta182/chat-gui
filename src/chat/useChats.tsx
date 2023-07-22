import {useEffect, useState} from 'react';
import {Chat} from './Chat.ts';
import ChatService from "./ChatService.tsx";

const useChats = (sessionId: string): Chat[] => {
    const [chats, setChats] = useState<Chat[]>([]);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await ChatService.getChatsForSession(sessionId);
                setChats(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchChats();
    }, [sessionId]);

    return chats;
};

export default useChats;
