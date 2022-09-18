import * as enterpriseService from '../services/enterprise.service.js';

export async function getEnterpriseInfoList(req, res, next) {
  // 가입자 관리 조회
  try {
    const enterpriseInfoList = await enterpriseService.getEnterpriseInfoList();
    return res.status(200).json({
      enterpriseInfoList,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function getCoinAndCacheInfo(req, res, next) {
  // 충전 및 지출 이력 조회
  try {
    const coinAndCacheInfo = await enterpriseService.getCoinAndCacheInfo();
    return res.status(200).json({
      coinAndCacheInfo,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function getServiceInfo(req, res, next) {
  // 서비스 가격정책 조회
  try {
    const serviceInfo = await enterpriseService.getServiceInfo();
    return res.status(200).json({
      serviceInfo,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function getUserServiceInfo(req, res, next) {
  // 가입자 서비스 이력 조회
  try {
    const userServiceInfo = await enterpriseService.getUserServiceInfo();
    return res.status(200).json({
      userServiceInfo,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function getAccessRecord(req, res, next) {
  // 접근 이력 조회
  try {
    const userAccessRecord = await enterpriseService.getUserAccessRecord();
    return res.status(200).json({
      userAccessRecord,
    });
  } catch (err) {
    console.error(err);
  }
}

// export async function getEnterpriseAccessRecord(req, res, next) {}
