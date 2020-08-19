import express from 'express'
import { serverConfig } from './config'
import { bindRouter } from './router'
import { cors } from '@ixuewen/express-util'

const app = express()

cors(app, serverConfig.corsOrigin)
bindRouter(app)

const port = serverConfig.port
app.listen(port)
console.log(`Server running at http://127.0.0.1:${port}`)
