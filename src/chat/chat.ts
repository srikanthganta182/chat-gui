export interface Chat {
    chat_id: string;
    session_id: string;
    text: string;
    is_client: boolean;
    created_at: Date;
}
