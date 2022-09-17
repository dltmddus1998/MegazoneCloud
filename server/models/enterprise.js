'use strict';
import mongoose from 'mongoose';

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

// Enterprise.find().then(async enterprise => {
//   if (enterprise.length === 0) {
//     await Enterprise.create([

//     ])
//   }
// })
