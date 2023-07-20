import axios, {AxiosResponse} from 'axios';
import config from '../../config.ts';
import {Chat} from './chat';

const {backendUrl} = config;

class ChatService {
    static async getChats(): Promise<Chat[]> {
        const response: AxiosResponse<Chat[]> = await axios.get(`${backendUrl}/chat`);
        return response.data;
    }

    static async getChat(id: string): Promise<Chat> {
        const response: AxiosResponse<Chat> = await axios.get(`${backendUrl}/chat/${id}`);
        return response.data;
    }

    static async createChat(chat: Chat): Promise<Chat> {
        const response: AxiosResponse<Chat> = await axios.post(`${backendUrl}/chat`, chat);
        return response.data;
    }

    static async updateChat(id: string, chat: Chat): Promise<Chat> {
        const response: AxiosResponse<Chat> = await axios.put(`${backendUrl}/chat/${id}`, chat);
        return response.data;
    }

    static async deleteChat(id: string): Promise<void> {
        await axios.delete(`${backendUrl}/chat/${id}`);
    }
}

export default ChatService;
