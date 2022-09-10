'use strict';
import mongoose from 'mongoose';

const newSchema = mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  adminPassword: {
    type: String,
    required: true,
  },
  adminPhoneNumber: {
    type: String,
    required: true,
  },
  businessNumber: {
    type: String,
    required: true,
  },
  consoleInfo: {
    type: String,
    required: true,
  },
});

export const Admin = mongoose.model('Admin', newSchema);
