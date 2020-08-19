import express from 'express'
import { serverConfig } from '../config'
import avatarRouter from './avatarRouter'
import { bindWithContextPath, setContextPath } from '@ixuewen/express-util'

setContextPath(serverConfig.contextPath)

const bindRouter = (app: express.Application): void => {
  bindWithContextPath(app, '/avatar', avatarRouter)
}

export { bindRouter }
