'use strict';
import mongoose from 'mongoose';

const newSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  serviceName: {
    type: String,
    required: true,
  },
  deductedCoin: {
    type: Number,
    required: true,
  },
});

export const Service = mongoose.model('Service', newSchema);

Service.find().then(async (service) => {
  if (service.length === 0) {
    await Service.create([
      {
        _id: new mongoose.Types.ObjectId(),
        serviceName: 'Service5',
        deductedCoin: -500,
      },
      {
        _id: new mongoose.Types.ObjectId(),
        serviceName: 'Service4',
        deductedCoin: -400,
      },
      {
        _id: new mongoose.Types.ObjectId(),
        serviceName: 'Service3',
        deductedCoin: -300,
      },
      {
        _id: new mongoose.Types.ObjectId(),
        serviceName: 'Service2',
        deductedCoin: -200,
      },
      {
        _id: new mongoose.Types.ObjectId(),
        serviceName: 'Service1',
        deductedCoin: -100,
      },
    ]);
  } else {
    return;
  }
});
