import { Router } from 'express';
import { findPassangers, findPassangersSurvived, findTotalPassangers } from '../controllers/PassangerController';

const router = Router()

router.get('/', findPassangers)
router.get('/survived', findPassangersSurvived)
router.get('/survived/sex', findTotalPassangers)


export default router

