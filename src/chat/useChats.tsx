import {useEffect, useState} from 'react';
import {Chat} from './Chat.ts';
import chatService from "./ChatService";

const useChats = (sessionId: string): Chat[] => {
    const [chats, setChats] = useState<Chat[]>([]);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await chatService.getChatsBySession(sessionId);
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
