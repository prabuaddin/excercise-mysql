import express, { Router } from 'express'
import PassangerRouter from './PassangerRouter'

const router = Router()

router.use(express.json())

router.use('/passenger', PassangerRouter )

export default router