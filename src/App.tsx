import React from 'react';
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
    const {clientName = ''} = useParams<{ clientName?: string }>();
    return (
        <div>
            <h2>Client: {clientName}</h2>
            <Routes>
                <Route index element={<SessionListContainer/>}/>
                <Route path=":sessionId" element={<SessionPage/>}/>
            </Routes>
        </div>
    );
};

const SessionPage: React.FC = () => {
    const {sessionId = ''} = useParams<{ sessionId?: string }>();
    return (
        <div>
            <h2>Session: {sessionId}</h2>
            <ChatList sessionId={sessionId}/>
        </div>
    );
};

const SessionListContainer: React.FC = () => {
    const {clientName = ''} = useParams<{ clientName?: string }>();
    return <SessionList clientName={clientName}/>;
}

export default App;
