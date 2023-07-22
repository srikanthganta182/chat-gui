import SessionItem from './SessionItem';
import useSessions from './useSessions.tsx';

interface SessionListProps {
    clientName: string;
    onSessionSelect: (sessionId: string) => void;
}

const SessionList: React.FC<SessionListProps> = ({clientName, onSessionSelect}) => {
    const sessions = useSessions(clientName);
    console.log(sessions)
    return (
        <div>
            <h2>Session List</h2>
            {sessions.map((session) => (
                <SessionItem key={session.session_id} session={session} onSelect={onSessionSelect}/>
            ))}
        </div>
    );
};

export default SessionList;
