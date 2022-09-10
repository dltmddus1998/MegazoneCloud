import { Enterprise } from '../models/enterprise.js';
import * as enterpriseService from '../services/enterprise.service.js';

export async function createAdmin(req, res, next) {
  /**
   * 기능: 회사 - 담당자 정보 작성하기
   * URI: /enterprises
   * 1. User 도큐먼트에서 담당자 이메일, 담당자이름 가져오기 (테이블 참조 활용) ✅
   * 2. admin패스워드 생성하기 - sha256 활용하여 패스워드 checksum해주는 모듈 사용
   * 3. request body(json) ✅
   *    회사 이름, 회사 아이디, 사업자 번호, 담당자 아이디, 담당자 연락처, 담당자 패스워드
   * 4. 위에 해당하는 정보가 모두 들어오면 콘솔 상태는 enable로 변경. / 회사, 담당자 정보중 하나 빠져있으면 disable / 둘다 없으면 none ✅
   * 5. Admin 도큐먼트에 저장 -> 담당자 관련 데이터 ✅
   * 6. Enterprsie 도큐먼트에 저장 -> 회사 관련 데이터 ✅
   * -----
   * 💡 콘솔상태 구분을 위해 Admin && Enterprise 모두 생성했을 때와 Enterprise만 생성했을 경우를 나눠서 구현했다.
   * 🔥 advanced: 담당자 패스워드 생성 후 패스워드 확인하는 로직 추가
   */

  try {
    const {
      enterpriseId,
      enterpriseName,
      businessNumber,
      adminId,
      adminPhoneNumber,
      adminPassword,
    } = req.body;

    // adminId를 이용하여 User Document에서 해당 담당자 정보 가져오기

    if (!(adminId || adminPhoneNumber || adminPassword)) {
      await enterpriseService.putEnterpriseInfo(
        enterpriseId,
        enterpriseName,
        null
      );

      const enterpriseData = await Enterprise.findOne({ enterpriseId });

      return res.status(200).json({
        message: 'Information of Enterprise is successfully created!!',
        enterpriseData,
      });
    } else {
      const adminInfo = await enterpriseService.getAdminInfoFromUsers(adminId);

      const transactionData = await enterpriseService.putInfoTransaction(
        enterpriseId,
        enterpriseName,
        businessNumber,
        adminId,
        adminPhoneNumber,
        adminPassword
      );

      const { email, name } = adminInfo;
      const data = { ...transactionData, email, name };

      return res.status(200).json({
        message:
          'Information of Enterprise and Admin is successfully created!!',
        data,
      });
    }
  } catch (err) {
    console.error(err);
  }
}

export async function getAdmin(req, res, next) {
  /**
   * 기능: 회사&담당자 정보 리스트 조회하기
   * URI: /enterprises/info
   * 1. 이메일, 회사이름, 회사아이디, 사업자 번호, 담당자 이름, 담당자 연락처, (담당자 이메일), 콘솔 정보, 콘솔 상태, admin 패스워드 조회
   * 2. Admin, Enterprise 도큐먼트에서 조회 가능
   */
}

export async function updateAdmin() {}

export async function deleteAdmin() {}
