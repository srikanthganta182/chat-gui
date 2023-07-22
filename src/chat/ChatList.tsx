import ChatItem from './ChatItem';
import useChats from './useChats.tsx';

interface ChatListProps {
    sessionId: string;
}

const ChatList: React.FC<ChatListProps> = ({sessionId}) => {
    const chats = useChats(sessionId);

    return (
        <div>
            <h2>Chat List</h2>
            {chats.map((chat) => (
                <ChatItem key={chat.chat_id} chat={chat}/>
            ))}
        </div>
    );
};

export default ChatList;
