'use strict';
import mongoose from 'mongoose';

const newSchema = mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
