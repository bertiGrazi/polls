import { FastifyInstance } from "fastify";

export async function pollResult(app:FastifyInstance) {
  app.get('/polls/:pollId/results', { websocket: true} )
}