import { SocketStream } from "@fastify/websocket";

export default interface WsManagerClient{
    client: SocketStream; //WebSocket client object
    clientId: number | string; //User ID or UUID if user is not authenticated
    ip: string; //IP of the connected user
    isAuthenticated: boolean; //Flag determining if user is authenticated
}