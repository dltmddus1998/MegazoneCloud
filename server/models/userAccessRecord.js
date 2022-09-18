'use strict';
import mongoose from 'mongoose';

const newSchema = mongoose.Schema({
  adminEmail: {
    type: String,
    ref: 'User',
    required: true,
  },
  adminName: {
    type: String,
    required: true,
  },
  enterpriseName: {
    type: String,
    required: true,
  },
  enterpriseId: {
    type: String,
    ref: 'Enterprise',
    required: true,
  },
  lastLoginDate: {
    type: Date,
    required: true,
  },
  lastLoginIP: {
    type: String,
    required: true,
  },
  lastLoginGEO: {
    type: String,
    required: true,
  },
});

export const UserAccessRecord = mongoose.model('UserAccessRecord', newSchema);

UserAccessRecord.find().then(async (userAccessRecord) => {
  if (userAccessRecord.length === 0) {
    await UserAccessRecord.create([
      {
        adminEmail: 'abc123@gmail.com',
        adminName: 'updatedTest1',
        enterpriseName: 'samsung',
        enterpriseId: 'samsunglec',
        lastLoginDate: '2022-09-12 12:01',
        lastLoginIP: '211.1.3.2',
        lastLoginGEO: 'S.Korea',
      },
      {
        adminEmail: 'oxk096@naver.com',
        adminName: 'test4',
        enterpriseName: 'lg',
        enterpriseId: 'lglec',
        lastLoginDate: '2022-09-15 08:01',
        lastLoginIP: '201.1.13.2',
        lastLoginGEO: 'S.Korea',
      },
    ]);
  }
});
