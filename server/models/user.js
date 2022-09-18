'use strict';
import mongoose from 'mongoose';

const newSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
  joinPath: {
    type: String,
    required: true,
  },
  joinDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  quitDate: {
    type: Date,
    required: new Date(),
  },
});

export const User = mongoose.model('User', newSchema);

// 임의의 가입자 생성
User.find().then(async (user) => {
  if (user.length === 0) {
    await User.create([
      {
        _id: new mongoose.Types.ObjectId(),
        email: 'abc123@gmail.com',
        name: 'test1',
        photo: 'abc12.xdfs.com',
        joinPath: 'gmail',
      },
      {
        _id: new mongoose.Types.ObjectId(),
        email: 'abd123@naver.com',
        name: 'test2',
        photo: 'abd12.xdfs.com',
        joinPath: 'naver',
      },
      {
        _id: new mongoose.Types.ObjectId(),
        email: 'chd873@gmail.com',
        name: 'test3',
        photo: 'chd87.xdfs.com',
        joinPath: 'gmail',
      },
      {
        _id: new mongoose.Types.ObjectId(),
        email: 'oxk096@naver.com',
        name: 'test4',
        photo: 'oxk096.xdfs.com',
        joinPath: 'naver',
      },
    ]);
  } else {
    return;
  }
});
