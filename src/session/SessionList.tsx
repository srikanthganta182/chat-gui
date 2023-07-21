import SessionItem from './SessionItem';
import useSessions from './useSession';

interface SessionListProps {
    clientName: string;
}

const SessionList: React.FC<SessionListProps> = ({clientName}) => {
    const sessions = useSessions(clientName);

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
