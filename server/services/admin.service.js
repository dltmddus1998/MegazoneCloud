import { User } from '../models/user.js';

export async function getUserInfo() {
  return await User.find({}, { _id: 0 });
}

export async function updateUserInfo(userId, email, name, photo) {
  return User.findOne({
    where: {
      _id: userId,
    },
  }).then((user) => {
    if (email) {
      user.email = email;
      user.save();
    }
    if (name) {
      user.name = name;
      user.save();
    }
    if (photo) {
      user.photo = photo;
      user.save();
    }
    return user;
  });
}

export async function deleteUserInfo(userId) {
  return User.findOne({
    where: {
      _id: userId,
    },
  }).then((user) => {
    user.quitDate = new Date();
    user.save();
    return user;
  });
}
