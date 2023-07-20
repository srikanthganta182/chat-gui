import axios, {AxiosResponse} from 'axios';
import config from '../../config.ts';
import {Session} from './session';

const {backendUrl} = config;

class SessionService {
    static async getSessions(): Promise<Session[]> {
        const response: AxiosResponse<Session[]> = await axios.get(`${backendUrl}/session`);
        return response.data;
    }

    static async getSessionsByClient(client: string): Promise<Session[]> {
        const response: AxiosResponse<Session[]> = await axios.get(
            `${backendUrl}/session/client/${client}`
        );
        return response.data;
    }

}

export default SessionService;
