import {useEffect, useState} from 'react';
import SessionService from './session.controller';
import {Session} from './session';

const useSessions = (clientName: string): Session[] => {
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const response = await SessionService.getSessionsByClient(clientName);
                setSessions(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSessions();
    }, [clientName]);

    return sessions;
};

export default useSessions;
