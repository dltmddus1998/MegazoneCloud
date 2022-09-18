import mongoose from 'mongoose';
import { config } from '../config/config.js';

export const dbConnected = () => {
  try {
    const connection = mongoose.connect(config.db.url);
    console.log('💽 MongoDB is successfully connected!! ');
    return connection;
  } catch (err) {
    console.error(err);
    handleError(err);
  }
};
