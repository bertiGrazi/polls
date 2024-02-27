import { z } from 'zod'
import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function getPollParms(app: FastifyInstance) {

app.get('/polls/:pollId', async (request, reply) => {
  const getPollParms = z.object({
    pollId: z.string().uuid()
  })

  const { pollId } = getPollParms.parse(request.params)

  const poll =  await prisma.poll.findUnique({
    where: {
      id: pollId,
    }
  })

  return reply.status(201).send({ poll })
})
}

