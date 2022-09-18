import { Enterprise } from '../models/enterprise.js';
import { CacheAndCoin } from '../models/cacheAndCoin.js';
import { Service } from '../models/service.js';
import { UserService } from '../models/userService.js';
import { UserAccessRecord } from '../models/userAccessRecord.js';

export async function getEnterpriseInfoList() {
  return await Enterprise.find({}, { _id: 0, __v: 0 });
}

export async function getCoinAndCacheInfo() {
  return await CacheAndCoin.find({}, { _id: 0, __v: 0 });
}

export async function getServiceInfo() {
  return await Service.find({}, { __v: 0, _id: 0, serviceId: 0 });
}

export async function getUserServiceInfo() {
  return await UserService.find({}, { _id: 0 });
}

export async function getSocialAccessRecord() {
  return await UserAccessRecord.find(
    {},
    { _id: 0, __v: 0, enterpriseName: 0, enterpriseId: 0 }
  );
}

export async function getEnterpriseAccessRecord() {
  return await UserAccessRecord.find(
    {},
    { _id: 0, __v: 0, adminEmail: 0, adminName: 0 }
  );
}
