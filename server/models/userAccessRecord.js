'use strict';
import mongoose from 'mongoose';

const newSchema = mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
