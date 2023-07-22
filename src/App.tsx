import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import SessionList from './session/SessionList';
import ChatList from './chat/ChatList';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/:clientName/*" element={<ClientPage/>}/>
                </Routes>
            </div>
        </Router>
    );
};

const ClientPage: React.FC = () => {
    const {client_name = ''} = useParams<{ client_name?: string }>();
    const [sessionId, setSessionId] = useState<string | null>(null);

    return (
        <div>
            <h2>Client: {client_name}</h2>
            <SessionList clientName={client_name} onSessionSelect={setSessionId}/>
            {sessionId && <ChatList sessionId={sessionId}/>}
        </div>
    );
};
export default App;
