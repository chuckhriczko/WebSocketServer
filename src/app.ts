'use strict'

import { SocketStream } from '@fastify/websocket';
import { FastifyRequest } from 'fastify';
import wsManager from './lib/WsManager/WsManager';
import { v4 as uuidv4 } from 'uuid';
import Message from './lib/types/Message';

let timer = null;
const fastify = require('fastify')()
fastify.register(require('@fastify/websocket'))


fastify.register(async function (fastify) {
  fastify.get('/time', { websocket: true }, (connection: SocketStream, req /* FastifyRequest */) => {
    connection.socket.send(new Date().toLocaleTimeString());
    req.fastify.log('New client connected to time: ' + req.ip);

    timer = setInterval(() => {
      connection.socket.send(new Date().toLocaleTimeString());
    }, 10 * 1000);
  })

  fastify.get('/chat', { websocket: true }, (connection: SocketStream, req: FastifyRequest) => {
    const client = wsManager.newClient(connection, req);
    console.log('New client connected to chat: ' + req.ip);

    connection.socket.on('message', (messageEvent: MessageEvent) => {
      const message: string = messageEvent.toString();
      const action: Message = JSON.parse(message);
      
      //Generate a unique id for this message
      action.id = uuidv4();

      //Set the date
      action.date = new Date();

      wsManager.sendAll(action);
    })
  })
})

fastify.listen({ port: 3031, logger: true }, err => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})