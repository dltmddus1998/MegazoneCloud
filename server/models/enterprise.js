'use strict';
import mongoose from 'mongoose';

const newSchema = mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
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
