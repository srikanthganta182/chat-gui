import React from 'react';
import {Session} from './Session.ts';
import SessionService from './SessionService.ts';

interface CreateSessionProps {
    clientName: string;
    onSessionCreate: (sessionId: string) => void;
}

const CreateSession: React.FC<CreateSessionProps> = ({clientName, onSessionCreate}) => {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newSession: Session = {
            client_name: clientName,
            session_id: 'to-be-filled',
            session_name: 'to-be-filled',
            created_at: new Date(),
            updated_at: new Date()
        };

        try {
            const createdSession = await SessionService.createSession(newSession);
            onSessionCreate(createdSession.session_id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Create Session</h2>
            <form onSubmit={handleSubmit}>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateSession;
