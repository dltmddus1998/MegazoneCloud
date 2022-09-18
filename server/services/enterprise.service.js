import { Enterprise } from '../models/enterprise.js';
import { CacheAndCoin } from '../models/cacheAndCoin.js';
import { Service } from '../models/service.js';
import { UserService } from '../models/userService.js';
import { UserAccessRecord } from '../models/userAccessRecord.js';

export async function getEnterpriseInfoList() {
  return await Enterprise.find();
}

export async function getCoinAndCacheInfo() {
  return await CacheAndCoin.find();
}

export async function getServiceInfo() {
  return await Service.find();
}

export async function getUserServiceInfo() {
  return await UserService.find();
}

export async function getAccessRecord() {
  return await UserAccessRecord.find();
}

// export async function getEnterpriseAccessRecord() {
//   return await UserAccessRecord.find({}, { adminId: false });
// }
