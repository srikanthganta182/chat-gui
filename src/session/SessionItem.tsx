interface SessionItemProps {
    session: any;
    onSelect: (sessionId: string) => void;
}

const SessionItem: React.FC<SessionItemProps> = ({session, onSelect}) => {
    return (
        <div>
            <h3>Client Name: {session.client_name}</h3>
            <button onClick={() => onSelect(session.session_id)}>
                Session ID: {session.session_id}
            </button>
        </div>
    );
};

export default SessionItem;