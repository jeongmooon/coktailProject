# CocktailFinder

## 로고

<hr />
<img width="200px" height="200px" src="https://user-images.githubusercontent.com/92348108/147043548-701caed3-9be5-49a4-85db-4b9bc8c357ea.png" />

- CocktailFinder -ver 0.0.1
- 프로젝트 기간 : 2021-12-15 ~ 2021-12-22
- [API 문서](https://documenter.getpostman.com/view/18192539/UVRBo6he)

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" /> &nbsp
  <img src="https://img.shields.io/badge/styledComponents-DB7093?style=flat-square&logo=styled-components&logoColor=white" /> &nbsp 
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> &nbsp
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/> &nbsp
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/> &nbsp  
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/> &nbsp 
  <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=Amazon%20AWS&logoColor=white"/> &nbsp
</p>

## 프로젝트 설명

<hr />

**칵테일을 찾기 쉬운 웹앱**. 칵테일을 어디서든 알기 쉽게 많은 정보를
찾아보는 서비스 입니다.

## 페이지 흐름

<hr />

**웹**

- 검색<br />
  <img src ="https://user-images.githubusercontent.com/92348108/147044668-73f43848-bcec-4a2b-b7a3-1ba485dc8749.gif">

- 상세페이지<hr />
  <img src="https://user-images.githubusercontent.com/92348108/147043263-ccd89f0e-3657-4252-93f1-bbaca3f6cdde.gif" />

<hr />

**모바일**

- 검색 <br />
  <img src ="https://user-images.githubusercontent.com/92348108/147044668-73f43848-bcec-4a2b-b7a3-1ba485dc8749.gif">

- 상세페이지 <br />
  <img src="https://user-images.githubusercontent.com/92348108/147043263-ccd89f0e-3657-4252-93f1-bbaca3f6cdde.gif" />

<hr />

## Team Role

공통

> - 프록시 서버 및 메인 서버설정, 배포

표정문

> - DB 설계 및 구축
> - 게시글 업로드 구현
> - 회원가입, 로그인 구현
> - 데이터 저장

김성현

> - React Styled
> - Frontend Page, Containerm, Component 구성
> - 데이터 저장

<hr />

## 특징

- url로 관리자 계정 회원가입 후 게시글 관리
- 칵테일 검색기능
- 칵테일 상세정보들을 정리하여 그래프로 시각화
- 랜덤한 칵테일 추천
- 중복되지 않는 칵테일 넘버 생성

<hr />

## Package

사용한 패키지

**Front**

- quill : 칵테일 내용 입력 도구
- react-google-charts : 차트 입력 도구
- react-loading : 로딩 페이지만드는 도구
- axios : 서버와 통신 하는 도구
- styled-components : CSS 하는 도구

**Backend**

- crypto : 패스워드 암호화 및 인증
- express : 웹, 서버 개발 프레임 워크
- jsonwebtoken : JWT(Json Web Token) 생성 및 인증
- multer : 파일 업로드 도구
- multer - s3 : AWS S3 파일 업로드 도구
- cors : corss-origin 문제 해결 도구

```
"dependencies": {
    "aws-sdk": "^2.1046.0",
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "ejs": "~2.6.1",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.1.2",
    "morgan": "~1.9.1",
    "multer": "^1.4.4",
    "multer-s3": "^2.10.0",
    "nodemon": "^2.0.15"
    "react-loading": "^2.0.3"
    "axios": "^0.24.0"
    "styled-components": "^5.3.3"
  }
```

<hr />

## Architecture

<img src="https://user-images.githubusercontent.com/92348108/147176171-eed468b4-463b-4785-a8d7-4b8551c3568e.jpg" />

<hr />

## DB ERD

<img src="https://user-images.githubusercontent.com/92348108/147177530-e9e75936-24f4-4d7a-b145-43be39f15784.jpg" />

- 검은색은 구현 한것
- 붉은색은 구현 예정

<hr />

## 배포

- AWS S3 - 클라우드 데이터 저장
- AWS EC2 - Server 호스팅
- Atlas - MongoDB 클라우드 호스팅 서비스
- Nginx - 프록시 서버

<hr />

## 사용된 도구

- [Node.js](https://nodejs.org/ko/)
- [Express.js](https://expressjs.com/ko/)
- [NPM](https://www.npmjs.com/) - 패키지 관리자
- [MongoDB](https://www.mongodb.com/kr) - No Sql DataBase
- [Nginx](https://www.nginx.com/) - 프록시 서버용
- [AWS](https://aws.amazon.com/ko/free/?trk=fa2d6ba3-df80-4d24-a453-bf30ad163af9&sc_channel=ps&sc_campaign=acquisition&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Core-Main|Core|KR|KR|Text&ef_id=CjwKCAiAtouOBhA6EiwA2nLKH3yewzaFlNVOE3uV7M2uIgGP-lZzRaHZgO2CN5cgIw6yDqIvmcBBrRoC1egQAvD_BwE:G:s&s_kwcid=AL!4422!3!563761819834!e!!g!!aws&ef_id=CjwKCAiAtouOBhA6EiwA2nLKH3yewzaFlNVOE3uV7M2uIgGP-lZzRaHZgO2CN5cgIw6yDqIvmcBBrRoC1egQAvD_BwE:G:s&s_kwcid=AL!4422!3!563761819834!e!!g!!aws&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all) - 서버 및 스토리지

<hr />

## 개발자

- [표정문](https://github.com/jeongmooon)
- [김성현](https://github.com/constate)

<hr />

## 차후 업데이트 목록

- DB 스키마 구조 정밀화
- amdinPage 구성
- UserPage 구성
- ErrorPage CSS 변경
- Browser별 호환 체크
