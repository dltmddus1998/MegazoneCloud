# MegazoneCloud
메가존 클라우드 과제

# 🧐 과제 분석

## 🔖 과제 의도

 소셜로그인한 이메일 아이디로 가입자를 받고 회사이름을 입력하게 해서, 회사가 충전하고 얼마나 썼는지 관리하고, 어떤 서비스를 사용하는지, 언제 접근하는지에 대한 업무 로직이 많이 사용되는데 이에 대해 파악해보자.

## 📝 요구 사항

☑️ **Provider System에서 Schema 설계 및 CRUD 구현**

☑️ **좌측 메뉴를 통해 client에서 원하는 데이터 값을 볼  수 있도록 UI 구현**

## ⚒ 기술 스택

**Back**: `NodeJS`, `Express`, `MongoDB`, `Atlas`, `Mongoose` 

**Front**: `VueJS` , `Vue-Bootstrap`

## 💡 Provider System 분석 및 참고 사항

### 👥 Social 가입자 관리

<aside>
💡 데이터를 Create, Update, Delete할 수 있는 로직 만들기 (다른 기능은 일반 스키마 설계 및 조회만 가능하면 됨)

</aside>

✔︎ **소셜로그인 →** 이메일, 이름, 사진 정보를 DB에 저장

✔︎ 더미 데이터를 몇개 넣어두고 시작

### 🛎 가입자 관리

✔︎ gmail, naver, kakao 중 소셜로그인 구현

✔︎ 소셜 로그인한 유저가 회사 정보 입력하는 부분

✔︎ **admin 패스워드** 부분에서는 `sha256`이라고 checksum해주는 nodejs 모듈 사용해서 해시값으로만 저장하는 방식으로 구현

### 💳 충전 및 지출 이력

✔︎ 차감 결과 ➡️ success / fail

✔︎ 사용 서비스 이름 ➡️ 서비스 가격 정책에 정의해둔 Service1 ~ Service5 참조해서 사용

### 🚚 서비스 가격 정책

✔︎ Service1 ~ Service5 ➡️ -100 ~ -500으로 정의

### 🧾 가입자 서비스 관리

✔︎ 회사 아이디, 서비스 이름 모두 다른 테이블에서 참조

### 🔽 접근 이력

✔︎ 소셜 로그인, 콘솔 부분은 상단 탭으로 구현 예정

---

# 🧭 REST API 및 데이터베이스 설계

## 🛣 REST API

<aside>
💡 **소셜 로그인 부분 제외 모두 조회 부분만 구현한다.**

</aside>

| Representation | Verb | URI |
| --- | --- | --- |
| 회사 & 담당자 전체 조회 | GET | /api/enterprises/enterpriseInfo |
| 가입자 전체 조회 | GET | /api/users/info |
| 회사 충전 및 지출 이력 조회 | GET | /api/enterprises/coinAndCacheInfo |
| 서비스 가격 정책 조회 | GET | /api/enterprises/serviceInfo |
| 회사 서비스 이력 조회 | GET | /api/enterprises/userServiceInfo |
| 가입자 접근 이력 조회 | GET | /api/enterprises/socialAccessRecord |
| 회사 접근 이력 조회 | GET | /api/enterprises/enterpriseAccessRecord |

---

## 💽 스키마 설계

### 가입자 테이블 - User

| Column (KR) | Column (EN) | DataType | Key | Null | 비고 |
| --- | --- | --- | --- | --- | --- |
| 아이디 | id | ObjectID | PK | Not Null |  |
| 이메일 | email | Varchar(50) |  | Not Null |  |
| 이름 | name | Varchar(30) |  | Not Null |  |
| 사진 | photo | Varchar(255) |  |  | 이미지 URL |
| 가입 경로 | joinPath | Varchar(40) |  | Not Null | gmail, naver … |
| 가입 일시 | joinDate | Datetime |  | Not Null | default: now() |
| 탈퇴 일시 | quitDate | Datetime |  |  |  |

### 담당자 회사 테이블 - Enterprise

| Column (KR) | Column (EN) | DataType | Key | Null | 비고 |
| --- | --- | --- | --- | --- | --- |
| 구분 아이디 | id | ObjectID | PK | Not Null |  |
| 이메일 | email | Varchar(50) |  |  |  |
| 담당자 이메일 | adminEmail | Varchar(50) | FK |  | User 참조 |
| 담당자 이름 | adminName | Varchar(30) |  |  |  |
| 담당자 패스워드 | adminPassword | Password |  |  | checksum |
| 담당자 연락처 | adminPhoneNumber | Varchar(30) |  |  |  |
| 사업자 번호 | businessNumber | Varchar(50) |  |  |  |
| 콘솔 정보 | consoleInfo | Varchar(255) |  | Not Null |  |
| 회사 아이디 | enterpriseId | Varchar(50) |  | Not Null | ex) samsungSdd |
| 회사 이름 | enterpriseName | Varchar(30) |  | Not Null | ex) 삼성 |

### 회사별 캐시 및 코인 현황 테이블 - CacheAndCoin

| Column (KR) | Column (EN) | DataType | Key | Null | 비고 |
| --- | --- | --- | --- | --- | --- |
| 아이디 | id | ObjectID | PK | Not Null |  |
| 회사 아이디 | enterpriseId | Varchar(50) |  | Not Null |  |
| 현재 코인 | coin | Integer |  | Not Null |  |
| 현재 캐시 | cache | Integer |  | Not Null |  |
| 현재 보너스 | bonus | Integer |  | Not Null |  |
| 마지막 갱신 일시 | lastRenewalDate | Datetime |  | Not Null |  |
| 캐시 충전 일시 | cacheChargedDate | Datetime |  | Not Null |  |
| 충전 캐시 | chargedCache | Integer |  | Not Null |  |
| 보너스 충전 일시 | bonusChargedDate | Datetime |  | Not Null |  |
| 충전 보너스 | chargedBonus | Integer |  | Not Null |  |
| 사용 서비스 아이디 | serviceId | Varchar(10) | FK | Not Null | Service 참조 |
| 차감 일시 | deductedDate | Datetime |  | Not Null |  |
| 차감 결과 | deductedResult | Varchar(15) |  | Not Null | success (true) / fail (false) |

### 서비스 가격 정책 테이블 - Service (Static Data 저장용)

| Column (KR) | Column (EN) | DataType | Key | Null | 비고 |
| --- | --- | --- | --- | --- | --- |
| 아이디 | id | ObjectID | PK | Not Null |  |
| 서비스 이름 | serviceName | Varchar(15) |  | Not Null | ex) Service1 |
| 차감 코인 | deductedCoin | Integer |  | Not Null | ex) 500 |

### 가입자 서비스 이력 테이블 - UserService

| Column (KR) | Column (EN) | DataType | Key | Null | 비고 |
| --- | --- | --- | --- | --- | --- |
| 아이디 | id | ObjectID | PK | Not Null |  |
| 회사 아이디 | enterpriseId | Varchar(50) |  | Not Null |  |
| 회사 이름 | enterpriseName | Varchar(30) |  | Not Null |  |
| 사용 서비스 이름 | serviceName | Varchar(15) |  | Not Null | Service 참조  |
| 월과금 시작일 | monthlyFeeStartDate | Datetime |  | Not Null | default: now() |
| 월과금 종료일 | monthlyFeeEndDate | Datetime |  | Not Null | 월과금 시작일로부터 1개월 후 |

### 접근 이력 - UserAccessRecord

| Column (KR) | Column (EN) | DataType | Key | Null | 비고 |
| --- | --- | --- | --- | --- | --- |
| 아이디 | id | ObjectID | PK | Not Null |  |
| 담당자 이메일 | email | ObjectID | FK | Not Null |  |
| 담당자 이름 | name |  |  | Not Null |  |
| 회사 아이디 | enterpriseId | Varchar(50) |  | Not Null |  |
| 회사 이름 | enterpriseName | Varchar(30) |  | Not Null |  |
| 마지막 로그인 일자 | lastLoginDate | Datetime |  | Not Null |  |
| 마지막 로그인 IP | lastLoginIP | Varchar(20) |  | Not Null | ex) 211.1.3.2 |
| 마지막 로그인 위치 | lastLoginGEO | Varchar(20) |  | Not Null | ex) S.Korea |

# 화면 구현

## Social 가입자 관리

![image](https://user-images.githubusercontent.com/73332608/190923309-5fa913c8-226c-4ce3-8639-4bafbfef1726.png)

## 가입자 관리

![image](https://user-images.githubusercontent.com/73332608/190923303-013762ce-9f60-442e-9ceb-f458334fb0d6.png)

## 충전 및 지출 관리

![image](https://user-images.githubusercontent.com/73332608/190923298-2e96a731-66e3-45de-85b5-dd994fef0f44.png)

## 서비스 관리

![image](https://user-images.githubusercontent.com/73332608/190923288-912f9df3-3b5b-48ec-81c1-b1fc8936bdcc.png)

## 가입자 서비스 이력

![image](https://user-images.githubusercontent.com/73332608/190923276-02cfb07d-140d-40bf-8637-b28e37bb0b83.png)

## 접근 이력

### Social Login

![image](https://user-images.githubusercontent.com/73332608/190923272-db7f7a3c-719e-420d-b97b-7288a13a254c.png)

### Console

![image](https://user-images.githubusercontent.com/73332608/190923263-59f85dce-a4c1-4826-ba91-48864f7f5141.png)

# Notion Link

## [Notion](https://vaulted-occupation-087.notion.site/bc81aa96441144eb8124fbde569e36b0)
