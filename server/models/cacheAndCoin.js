'use strict';
import mongoose from 'mongoose';

const newSchema = mongoose.Schema({
  enterpriseId: {
    type: String,
    required: true,
  },
  coin: {
    type: Number,
    required: true,
  },
  cache: {
    type: Number,
    required: true,
  },
  bonus: {
    type: Number,
    required: true,
  },
  lastRenewalDate: {
    type: Date,
    required: true,
  },
  cacheChargedDate: {
    type: Date,
    required: true,
  },
  bonusChargedDate: {
    type: Date,
    required: true,
  },
  chargedCache: {
    type: Number,
    required: true,
  },
  chargedBonus: {
    type: Number,
    required: true,
  },
  serviceId: {
    type: Number,
    required: true,
    ref: 'Service',
  },
  deductedDate: {
    type: Date,
    required: true,
  },
  deductedResult: {
    type: Boolean, // 0: fail, 1: success
    required: true,
  },
});

export const CacheAndCoin = mongoose.model('CacheAndCoin', newSchema);

CacheAndCoin.find().then(async (cacheAndCoin) => {
  if (cacheAndCoin.length === 0) {
    await CacheAndCoin.create([
      {
        enterpriseId: new mongoose.Types.ObjectId(),
        coin: 1000,
        cache: 700,
        bonus: 300,
        lastRenewalDate: new Date(),
        cacheChargedDate: new Date(),
        bonusChargedDate: new Date(),
        chargedCache: 300,
        chargedBonus: 500,
        serviceId: 5,
        deductedDate: new Date(),
        deductedResult: true,
      },
    ]);
  }
});
