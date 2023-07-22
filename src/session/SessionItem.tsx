import SessionService from "./SessionService.ts";
import {Session} from "./Session.ts";

interface SessionItemProps {
    session: Session;
    onSelect: (sessionId: string) => void;
    onSessionDelete: () => void; // to trigger a refresh
}

const SessionItem: React.FC<SessionItemProps> = ({session, onSelect, onSessionDelete}) => {
    const handleDelete = async () => {
        try {
            await SessionService.deleteSession(session.session_id);
            onSessionDelete();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={() => onSelect(session.session_id)}>
                Session ID: {session.session_name}
            </button>
            <button onClick={handleDelete}>X</button>
        </div>
    );
};

export default SessionItem;
