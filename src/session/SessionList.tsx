import SessionItem from "./SessionItem.tsx";
import useSessions from "./useSessions.tsx";

interface SessionListProps {
    clientName: string;
    onSessionSelect: (sessionId: string) => void;
    refreshCount: number;
    onSessionDelete: () => void;
}

const SessionList: React.FC<SessionListProps> = ({clientName, onSessionSelect, refreshCount, onSessionDelete}) => {
    const sessions = useSessions(clientName, refreshCount);

    return (
        <div>
            <h2 className="text-toolbox-secondary text-base font-bold mb-2 ml-6 session-list-title">Session List</h2>
            {sessions.map((session) => (
                <SessionItem key={session.session_id} session={session} onSelect={onSessionSelect}
                             onSessionDelete={onSessionDelete}/>
            ))}
        </div>
    );
};

export default SessionList;
