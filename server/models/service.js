'use strict';
import mongoose from 'mongoose';

const newSchema = mongoose.Schema({
  serviceId: {
    type: Number,
    required: true,
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
        serviceId: 1,
        serviceName: 'Service5',
        deductedCoin: -500,
      },
      {
        serviceId: 2,
        serviceName: 'Service4',
        deductedCoin: -400,
      },
      {
        serviceId: 3,
        serviceName: 'Service3',
        deductedCoin: -300,
      },
      {
        serviceId: 4,
        serviceName: 'Service2',
        deductedCoin: -200,
      },
      {
        serviceId: 5,
        serviceName: 'Service1',
        deductedCoin: -100,
      },
    ]);
  } else {
    return;
  }
});
