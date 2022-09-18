import express from 'express';
import * as adminController from '../controllers/admin.controller.js';

const router = express.Router();

router.put('/:userId', adminController.updateUserInfo);

router.patch('/:userId', adminController.deleteUserInfo);

export default router;
