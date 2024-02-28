import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { createPoll } from './routes/create-poll'
import { getPollParms } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import { pollResult } from './ws/poll-result'

const app = fastify()

app.register(cookie, {
  secret: "polls-app", 
  hook: 'onRequest'
})
app.register(websocket)
app.register(createPoll)
app.register(getPollParms)
app.register(voteOnPoll)

app.register(pollResult)

app.listen({port: 3333}).then(() => {
  console.log("✅ HTTP server running!")
})
