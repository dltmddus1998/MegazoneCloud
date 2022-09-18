import express from 'express';
import 'express-async-errors';
import * as enterpriseController from '../controllers/enterprise.controller.js';

const router = express.Router();

router.get('/enterpriseInfo', enterpriseController.getEnterpriseInfoList);

router.get('/coinAndCacheInfo', enterpriseController.getCoinAndCacheInfo);

router.get('/serviceInfo', enterpriseController.getServiceInfo);

router.get('/userServiceInfo', enterpriseController.getUserServiceInfo);

router.get('/accessRecord', enterpriseController.getAccessRecord);

export default router;
