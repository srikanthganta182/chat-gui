import React from 'react';
import {Session} from './session';

interface SessionItem {
    session: Session;
}

const SessionItem: React.FC<SessionItem> = ({session}) => {
    return (
        <div>
            <h3>Client Name: {session.client_name}</h3>
            <p>Session ID: {session.session_id}</p>
        </div>
    );
};

export default SessionItem;
