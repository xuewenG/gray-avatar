import express from 'express'
import * as avatarController from '../controller/avatarController'

// prefix: /avatar
const router = express.Router()
router.all('/:qq', avatarController.qq)

export default router
