import fastify from 'fastify'
import { createPoll } from './routes/create-poll'
import { getPollParms } from './routes/get-poll'

const app = fastify()

app.register(createPoll)
app.register(getPollParms)

app.listen({port: 3333}).then(() => {
  console.log("✅ HTTP server running!")
})
