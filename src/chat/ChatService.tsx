import axios, {AxiosResponse} from 'axios';
import {Chat} from './Chat';

const backendUrl = 'http://localhost:8081'; // Consider moving this to a config file

const getChats = async (): Promise<Chat[]> => {
    const response: AxiosResponse<Chat[]> = await axios.get(`${backendUrl}/chat`);
    return response.data;
}

const getChat = async (id: string): Promise<Chat> => {
    const response: AxiosResponse<Chat> = await axios.get(`${backendUrl}/chat/${id}`);
    return response.data;
}

const createChat = async (chat: Chat): Promise<Chat> => {
    const response: AxiosResponse<Chat> = await axios.post(`${backendUrl}/chat`, chat);
    return response.data;
}

const updateChat = async (id: string, chat: Chat): Promise<Chat> => {
    const response: AxiosResponse<Chat> = await axios.put(`${backendUrl}/chat/${id}`, chat);
    return response.data;
}

const deleteChat = async (id: string): Promise<void> => {
    await axios.delete(`${backendUrl}/chat/${id}`);
}

const getChatsBySession = async (sessionId: string): Promise<Chat[]> => {
    const response: AxiosResponse<Chat[]> = await axios.get(`${backendUrl}/chat/session/${sessionId}`);
    return response.data;
}

export default {
    getChats,
    getChat,
    createChat,
    updateChat,
    deleteChat,
    getChatsBySession
}
