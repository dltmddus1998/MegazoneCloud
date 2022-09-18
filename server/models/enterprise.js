'use strict';
import mongoose from 'mongoose';
import crypto from 'crypto';

const newSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  adminName: {
    type: String,
    required: false,
  },
  adminEmail: {
    type: String,
    ref: 'User',
    required: false,
  },
  adminPassword: {
    type: String,
    required: false,
  },
  adminPhoneNumber: {
    type: String,
    required: false,
  },
  businessNumber: {
    type: String,
    required: false,
  },
  consoleInfo: {
    type: String,
    required: false,
  },
  enterpriseId: {
    type: String,
    required: true,
    unique: true,
  },
  enterpriseName: {
    type: String,
    require: true,
  },
});

export const Enterprise = mongoose.model('Enterprise', newSchema);

function createHashedPassword(password) {
  return crypto.createHash('sha256').update(password).digest('base64');
}

Enterprise.find().then(async (enterprise) => {
  if (enterprise.length === 0) {
    await Enterprise.create([
      {
        email: 'abc123@gmail.com',
        adminName: 'test1',
        adminEmail: 'abc123@gmail.com',
        adminPassword: createHashedPassword('kvneilxol10'),
        adminPhoneNumber: '010-1234-5678',
        businessNumber: '124-23443',
        consoleInfo: 'enable',
        enterpriseId: 'samsungelec',
        enterpriseName: 'samsung',
      },
      {
        email: 'oxk096@naver.com',
        adminName: 'test4',
        adminEmail: 'oxk096@naver.com',
        adminPassword: createHashedPassword('sfwkkl134'),
        adminPhoneNumber: '010-9183-1111',
        businessNumber: '987-01293',
        consoleInfo: 'enable',
        enterpriseId: 'lgelec',
        enterpriseName: 'lg',
      },
    ]);
  }
});
