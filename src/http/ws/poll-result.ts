import { FastifyInstance } from "fastify";

export async function pollResult(app: FastifyInstance) {
  app.get('/polls/:pollId/results', { websocket: true}, (connection, request) => {
    connection.socket.on('message', (message: string) => {
      connection.socket.send('you sent: ' + message)

      setInterval(() => {
        connection.socket.send('oi')
      }, 2000)
    })
  })
}