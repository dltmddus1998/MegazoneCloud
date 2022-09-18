'use strict';
import mongoose from 'mongoose';

const now = new Date();

const newSchema = mongoose.Schema({
  enterpriseId: {
    type: String,
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  monthlyFeeStartDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  monthlyFeeEndDate: {
    type: Date,
    required: true,
    default: new Date(now.setMonth(now.getMonth() + 1)),
  },
});

export const UserService = mongoose.model('UserService', newSchema);

UserService.find().then(async (userService) => {
  if (userService.length === 0) {
    await UserService.create([
      {
        enterpriseId: 'samsunglec',
        serviceName: 'Service5',
      },
      {
        enterpriseId: 'samsunglec',
        serviceName: 'Service4',
      },
    ]);
  }
});
