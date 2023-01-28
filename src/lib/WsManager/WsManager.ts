import dotenv from 'dotenv';
import { SocketStream } from '@fastify/websocket';
import { FastifyRequest } from 'fastify';
import crypto from 'crypto';

export interface WsManagerClient{
    client: SocketStream; //WebSocket client object
    clientId: number | string; //User ID or UUID if user is not authenticated
    ip: string; //IP of the connected user
}

export interface WsClientAction{
    method: 'get' | 'post' | 'put' | 'delete';
    action: string;
    type?: string;
    error: unknown | null;
    data: unknown | null;
}

export class WsManager{
    public clients: WsManagerClient[] = [];
    public testEmitter = null; //Enables/Disables WebSocket test emitter

    constructor(isTestEmitter?: boolean){
        dotenv.config();
        console.log('Initializing WebSocket Manager');

        if (isTestEmitter){
            //this.initTestEmitter();
        }
    }

    public newClient = (client: SocketStream, req: FastifyRequest): WsManagerClient => {
        const wsClient: WsManagerClient = {
            client,
            clientId: crypto.randomUUID(),
            ip: req.headers.host
        }

        //Add the event listener for incoming messages for this client
        wsClient.client.socket.on('message', (message: MessageEvent) => {
            this.onMessage(wsClient, message.data)
        });

        //Add close handler for disconnecting clients
        wsClient.client.socket.on('close', (message: MessageEvent) => {
            this.onClose(wsClient)
        });

        //Add the client to the pool
        this.clients.push(wsClient);

        console.log(`WSManager New Client: ${wsClient.clientId} connected from ${wsClient.ip}`);
        console.log(`${this.clients.length} clients currently connected`);
        //this.send(wsClient.clientId, `Welcome to Debatabl${wsClient.isAuthenticated ? `, ${wsClient.user.displayName}` : ''}!`);

        return wsClient;
    }

    /**
     * Gets a client by ID
     * @param id number | string
     * @returns WsManagerClient
     */
    public getClientById = (id: number | string) => {
        return this.clients.find(wsClient => wsClient.clientId === id);
    }

    /**
     * Send a message to a specific client
     * @param clientId number | string
     * @param message string
     */
    public send = (clientId: number | string, message: string) => {
        //First, find the client
        const ws: WsManagerClient = this.clients.find(wsClient => wsClient.clientId === clientId);
        
        //Send the message
        ws.client.socket.send(message);
    }

    /**
     * Broadcasts a message to all clients
     * @param message string | any
     */
    public sendAll = (message: string | any, isAuthenticated = false) => {
        message = typeof message !== 'string' ? JSON.stringify(message) : message;

        this.clients.forEach((wsManager: WsManagerClient) => {
            wsManager.client.socket.send(message);
        });
    }

    /**
     * Receives a message for a client and processes it
     * Essentially acts as a router
     * @param messageEvent MessageEvent
     */
    public onMessage = async (wsClient: WsManagerClient, messageEvent: MessageEvent) => {
        let data: unknown = null;

        try{
            const message: string = messageEvent.toString();
            const action: WsClientAction = JSON.parse(message);

            //Route the message and return the data
            //data = this.routeMessage(wsClient, action, message);
            switch(action.action){
                case 'ping':
                    
                    break;
                default:
                    console.error(`No route found for WSAction: ${JSON.stringify(action.action)}`);
            }

            //Create and send response if a response is created
            //(For instance, ping will not generate a response)
            if (data !== null){
                wsClient.client.socket.send(JSON.stringify({ ...action, data, error: null } as WsClientAction));
            }
        } catch(err){
            //Send error response
            wsClient.client.socket.send(JSON.stringify({ error: err.message }));
            console.error(`WS onMessage Error: ${err.message}`);
        }
    }

    /**
     * Removes a client from the client pool once it disconnects
     */
     public onClose = (wsClient: WsManagerClient): void => {
        try{
            const clientIndex = this.clients.findIndex(client => client.clientId == wsClient.clientId);

            if (!this.clients[clientIndex]){
                throw new Error(`Error finding client ${wsClient.clientId}`);
            }

            //Remove the client from the list
            this.clients.splice(clientIndex, 1);

            console.log(`Client ${wsClient.clientId} successfully disconnected`);
        } catch(err){
            console.error(`Error removing client ${wsClient.clientId}: ${err.message}}`)
        }
    }
}

//Instantiate our redis class
const wsManager: WsManager = new WsManager();
//export const wsTestEmitter: WsManager = new WsManager(true);

//Export the class so the rest of the app can use it
export default wsManager;