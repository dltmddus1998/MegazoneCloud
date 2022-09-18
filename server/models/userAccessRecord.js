'use strict';
import mongoose from 'mongoose';

const newSchema = mongoose.Schema({
  // adminId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
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
