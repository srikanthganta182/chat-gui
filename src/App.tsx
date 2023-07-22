import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import ChatList from "./chat/ChatList.tsx";
import SessionList from "./session/SessionList.tsx";

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
    return (
        <div>
            <h2>Client: {client_name}</h2>
            <SessionList clientName={client_name} onSessionSelect={setSessionId}/>
            {sessionId && <ChatList sessionId={sessionId}/>}
        </div>
    );
};
export default App;
