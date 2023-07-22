import axios, {AxiosResponse} from 'axios';
import {Session} from './Session.ts';

const backendUrl = 'http://localhost:8081'; // Consider moving this to a config file

const getSessions = async (): Promise<Session[]> => {
    const response: AxiosResponse<Session[]> = await axios.get(`${backendUrl}/session`);
    return response.data;
}

const getSessionsByClient = async (client: string): Promise<Session[]> => {
    const response: AxiosResponse<Session[]> = await axios.get(
        `${backendUrl}/session/client/${client}`
    );
    return response.data;
}


const createSession = async (session: Session): Promise<Session> => {
    const response: AxiosResponse<Session> = await axios.post(`${backendUrl}/session`, session);
    return response.data;
}

const deleteSession = async (sessionId: string): Promise<void> => {
    await axios.delete(`${backendUrl}/session/${sessionId}`);
}

export default {
    getSessions,
    getSessionsByClient,
    createSession,
    deleteSession,
}