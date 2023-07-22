import {useEffect, useState} from 'react';
import SessionService from './SessionService.ts';
import {Session} from './Session.ts';

const useSessions = (clientName: string, refreshCount: number): Session[] => {
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const response = await SessionService.getSessionsForClient(clientName);
                setSessions(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSessions();
    }, [clientName, refreshCount]);

    return sessions;
};

export default useSessions;
