import { SocketStream } from "@fastify/websocket";
import User from "../../../data/entities/User";

export default interface WsManagerClient{
    client: SocketStream; //WebSocket client object
    clientId: number | string; //User ID or UUID if user is not authenticated
    ip: string; //IP of the connected user
    user: User | null; //User object, if authenticated
    isAuthenticated: boolean; //Flag determining if user is authenticated
}