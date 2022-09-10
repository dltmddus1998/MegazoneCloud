import express from 'express';
// import 'express-async-errors';
// import { body } from 'express-validator';
import * as enterpriseController from '../controllers/enterprise.controller.js';

const router = express.Router();

router.post('/', enterpriseController.createAdmin);

router.get('/info', enterpriseController.getAdmin);

router.put('/info/:enterpriseId', enterpriseController.updateAdmin);

router.delete('/info', enterpriseController.deleteAdmin);

export default router;
