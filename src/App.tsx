import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import CreateSession from "./session/CreateSession.tsx";
import SessionList from "./session/SessionList.tsx";
import ChatList from "./chat/ChatList.tsx";

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
        setRefreshCount(refreshCount + 1);
    };

    const handleDelete = () => {
        setRefreshCount(refreshCount + 1);
    };

    return (
        <div>
            <h2>Client: {client_name}</h2>
            <CreateSession clientName={client_name} onSessionCreate={handleCreate}/>
            <SessionList clientName={client_name} onSessionSelect={setSessionId} refreshCount={refreshCount}
                         onSessionDelete={handleDelete}/>
            {sessionId && <ChatList sessionId={sessionId}/>}
        </div>
    );
};


export default App;
