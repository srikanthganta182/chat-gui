import React from 'react';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import ChatForm from './chat/ChatForm';
import ChatList from './chat/ChatList';
import SessionList from './session/SessionList';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/:clientName/:sessionId" element={<ClientPage/>}/>
                </Routes>
            </div>
        </Router>
    );
};

const ClientPage: React.FC = () => {
    const {clientName = '', sessionId = ''} = useParams<{ clientName?: string, sessionId?: string }>();

    return (
        <div>
            <h2>Client: {clientName}</h2>
            <ChatForm sessionId={sessionId}/>
            <ChatList sessionId={sessionId}/>
            <SessionList clientName={clientName}/>
        </div>
    );
};

export default App;
