'use strict';
import mongoose from 'mongoose';

const now = new Date();

const newSchema = mongoose.Schema({
  enterpriseId: {
    type: String,
    required: true,
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
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

// UserService.find().then(async userService => {
//   await UserService.create([
//     {
//         enterpriseId:
//     }
//   ])
// })
