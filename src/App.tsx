import React from 'react';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import ChatForm from './chat/ChatForm';
import SessionList from './session/sessionList';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/:clientName" element={<ClientPage/>}/>
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
            <ChatForm/>
            <SessionList clientName={clientName}/>
        </div>
    );
};

export default App;
