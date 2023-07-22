import React, {useState} from 'react';
import {Session} from './Session.ts';
import SessionService from './SessionService.ts';

const CreateSession: React.FC = () => {
    const [clientName, setClientName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newSession: Session = {
            session_id: '',
            client_name: clientName,
        };

        try {
            await SessionService.createSession(newSession);
            setClientName('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Create Session</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Client Name:</label>
                    <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateSession;
