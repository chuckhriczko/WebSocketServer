export default interface WsClientAction{
    method: 'get' | 'post' | 'put' | 'delete';
    action: string;
    type?: string;
    error: unknown | null;
    data: unknown | null;
}