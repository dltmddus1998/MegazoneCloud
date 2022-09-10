import { User } from '../models/user.js';
import { Admin } from '../models/admin.js';
import { Enterprise } from '../models/enterprise.js';
import mongoose from 'mongoose';
import crypto from 'crypto';

export async function getAdminInfoFromUsers(adminId) {
  try {
    const admin = await User.findOne({
      _id: adminId,
    });

    return admin;
  } catch (err) {
    console.error(err);
  }
}

export async function putInfoTransaction(
  enterpriseId,
  enterpriseName,
  businessNumber,
  adminId,
  adminPhoneNumber,
  adminPassword
) {
  const session = await mongoose.startSession();
  try {
    session.startTransaction(); // 트랜잭션 시작

    // Admin 도큐먼트에 저장 - adminId, adminPassword (sha256 암호화 적용), adminPhoneNumber, businessNumber, consoleInfo = https://hybrixops.ip/<enterpriseId>
    await putAdminInfo(
      adminId,
      adminPassword,
      adminPhoneNumber,
      businessNumber,
      enterpriseId,
      session
    );

    // Enterprise 도큐먼트에 저장 - enterpriseId, enterpriseName
    await putEnterpriseInfo(enterpriseId, enterpriseName, session);

    await session.commitTransaction();
    session.endSession();

    console.log('Transaction success at createAdmin');
    const adminData = await Admin.findOne({
      adminId,
    });
    const enterpriseData = await Enterprise.findOne({
      adminId,
    });

    if (!adminData) {
      return;
    } else {
      const data = {
        adminId: adminData.adminId,
        adminPhoneNumber: adminData.adminPhoneNumber,
        businessNumber: adminData.businessNumber,
        consoleInfo: adminData.consoleInfo,
        enterpriseId: enterpriseData.enterpriseId,
        enterpriseName: enterpriseData.enterpriseName,
      };
      return data;
    }
  } catch (err) {
    console.error(err, 'Transaction error at createAdmin');
    await session.abortTransaction();
    session.endSession();
  }
}

function createHashedPassword(password) {
  return crypto.createHash('sha256').update(password).digest('base64');
}

async function putAdminInfo(
  adminId,
  adminPassword,
  adminPhoneNumber,
  businessNumber,
  enterpriseId,
  session
) {
  try {
    // crypto를 이용한 비밀번호 암호화 (with sha256)
    const hashedPassword = createHashedPassword(adminPassword);

    if (!(adminPassword || adminPhoneNumber || businessNumber)) {
      return;
    } else {
      return await Admin.create(
        [
          {
            adminId,
            adminPassword: hashedPassword,
            adminPhoneNumber,
            businessNumber,
            consoleInfo: `https://hybrixops.ip/${enterpriseId}`,
          },
        ],
        { session }
      );
    }
  } catch (err) {
    console.error(err);
  }
}

export async function putEnterpriseInfo(enterpriseId, enterpriseName, session) {
  try {
    return await Enterprise.create(
      [
        {
          enterpriseId,
          enterpriseName,
        },
      ],
      { session }
    );
  } catch (err) {
    console.error(err);
  }
}
