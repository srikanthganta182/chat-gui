import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import SessionList from "./session/SessionList.tsx";
import ChatList from "./chat/ChatList.tsx";
import ChatForm from "./chat/ChatForm.tsx";
import './App.css';
import SessionService from "./session/SessionService.ts";
import CreateSession from "./session/CreateSession.tsx";
import {Layout} from "antd";

const {Sider, Content} = Layout;

const App = () => (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/:client_name/*" element={<ClientPage/>}/>
            </Routes>
        </div>
    </Router>
);

const ClientPage = () => {
    const {client_name = ''} = useParams<{ client_name?: string }>();
    const [sessionId, setSessionId] = useState<string>("");
    const [refreshCount, setRefreshCount] = useState<number>(0);

    const handleCreate = (newSessionId: string) => {
        if (sessionId !== newSessionId) {
            refresh();
        }
        setSessionId(newSessionId);
    };

    const refresh = () => setRefreshCount(prevCount => prevCount + 1);

    useEffect(() => {
        const fetchSessions = async () => {
            const sessions = await SessionService.getSessionsForClient(client_name);
            if (sessions.length > 0) {
                setSessionId(sessions[0].session_id);
            }
        };

        fetchSessions();
    }, [client_name, refreshCount]);

    const handleSessionDelete = async () => {
        const sessions = await SessionService.getSessionsForClient(client_name);
        setSessionId(sessions.length > 0 ? sessions[0].session_id : '');
        refresh();
    };

    return (
        <Layout className="ant-col">
            <Sider className="ant-menu ant-menu-root ant-menu-inline session-sidebar" width="20vw">
                <CreateSession clientName={client_name} onSessionCreate={handleCreate}/>
                <SessionList clientName={client_name} onSessionSelect={setSessionId} refreshCount={refreshCount}
                             onSessionDelete={handleSessionDelete}/>
            </Sider>
            <Content className="ant-menu-title-content">
                {sessionId && (
                    <>
                        <ChatList sessionId={sessionId} refreshCount={refreshCount} onChatReceive={refresh}/>
                        <ChatForm sessionId={sessionId}/>
                    </>
                )}
            </Content>
        </Layout>
    );
};

export default App;
