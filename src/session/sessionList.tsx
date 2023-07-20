import React, {useEffect, useState} from 'react';
import SessionItem from './SessionItem';
import SessionService from './SessionService';
import {Session} from './session';

interface SessionListProps {
    clientName: string;
}

const SessionList: React.FC<SessionListProps> = ({clientName}) => {
    const [sessions, setSessions] = useState<Session[]>([]);

    useEffect(() => {
        fetchSessions();
    }, [clientName]);


    const fetchSessions = async () => {
        try {
            const response = await SessionService.getSessionsByClient(clientName);
            setSessions(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Session List</h2>
            {sessions.map((session) => (
                <SessionItem key={session.session_id} session={session}/>
            ))}
        </div>
    );
};

export default SessionList;
