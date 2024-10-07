import express, { Request, Response } from 'express';
import { createUserSession, generateCode } from '../controller/sessionController';

const router = express.Router();

router.post('/create-session', createUserSession);

router.get('/generate-code',generateCode)

export default router;