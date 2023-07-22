import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import CreateSession from "./session/CreateSession.tsx";
import SessionList from "./session/SessionList.tsx";
import ChatList from "./chat/ChatList.tsx";
import ChatForm from "./chat/ChatForm.tsx";
import SessionService from "./session/SessionService.ts";

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/:client_name/*" element={<ClientPage/>}/>
                </Routes>
            </div>
        </Router>
    );
};

const ClientPage: React.FC = () => {
    const {client_name = ''} = useParams<{ client_name?: string }>();
    const [sessionId, setSessionId] = useState<string>("");
    const [refreshCount, setRefreshCount] = useState<number>(0);

    const handleCreate = (sessionId: string) => {
        setSessionId(sessionId);
        refresh();
    };

    const refresh = () => {
        setRefreshCount(refreshCount + 1);
    };

    useEffect(() => {
        const fetchSessions = async () => {
            const sessions = await SessionService.getSessionsForClient(client_name);
            if (sessions.length > 0) {
                setSessionId(sessions[0].session_id);
            }
        };

        fetchSessions();
    }, [client_name]);

    return (
        <div>
            <h2>Client: {client_name}</h2>
            <CreateSession clientName={client_name} onSessionCreate={handleCreate}/>
            <SessionList clientName={client_name} onSessionSelect={setSessionId} refreshCount={refreshCount}
                         onSessionDelete={refresh}/>
            {/*chat to be refreshed on close*/}
            {sessionId && <ChatList sessionId={sessionId}/>}
            <ChatForm sessionId={sessionId}/>
        </div>
    );
};


export default App;
