import * as adminService from '../services/admin.service.js';

export async function updateUserInfo(req, res, next) {
  try {
    const { userId } = req.params;
    const { email, name, photo } = req.body;
    const result = await adminService.updateUserInfo(
      userId,
      email,
      name,
      photo
    );
    return res.status(201).json({
      message: '가입자 수정이 완료되었습니다.',
      result,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function deleteUserInfo(req, res, next) {
  try {
    const { userId } = req.params;
    const result = await adminService.deleteUserInfo(userId);
    return res.status(201).json({
      message: '가입자 탈퇴처리가 완료되었습니다.',
      result,
    });
  } catch (err) {
    console.error(err);
  }
}
