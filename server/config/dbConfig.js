import mongoose from 'mongoose';
import { config } from './config.js';

export const dbConnect = () => {
  try {
    const connection = mongoose.connect(config.db.url);
    console.log('💽 MongoDB is successfully connected!! ');
    return connection;
  } catch (err) {
    console.error(err);
  }
};
