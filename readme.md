# CocktailFinder

## 로고

<hr />
<img src="https://jeongmoon.s3.ap-northeast-2.amazonaws.com/1640049481453.png" />

- CocktailFinder -ver 0.0.1
- 프로젝트 기간 : 2021-12-15 ~ 2021-12-22
- [API 문서](https://documenter.getpostman.com/view/18192539/UVRBo6he)

## 프로젝트 설명

<hr />
**칵테일을 찾기 쉬운 웹앱**. 칵테일을 어디서든 알기 쉽게 많은 정보를
찾아보는 서비스 입니다.

## 페이지 흐름

<hr />

<img width="100%" src ="https://user-images.githubusercontent.com/92348108/146396312-15dccb01-922b-44bb-9a57-f4c575785493.gif">

## Team Role

<hr />

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

## 특징

<hr />

- url로 관리자 계정 회원가입 후 게시글 관리
- 칵테일 검색기능
- 칵테일 상세정보들을 정리하여 그래프로 시각화
- 랜덤한 칵테일 추천
- 중복되지 않는 칵테일 넘버 생성

## Package

<hr />

사용한 패키지

// Backend

- crypto : 패스워드 암호화 및 인증
- express : 웹, 서버 개발 프레임 워크
- jsonwebtoken : JWT(Json Web Token) 생성 및 인증
- multer : 파일 업로드 도구
- multer - s3 : AWS S3 파일 업로드 도구
- cors : corss-origin 문제 해결 도구

// Front

- quill : 칵테일 내용 입력 도구
- react-google-charts : 차트 입력 도구

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
  }
```

## Architecture

<hr />

## DB ERD(나중에 추가 예정)

<hr />

## 배포

<hr />

- AWS S3 - 클라우드 데이터 저장
- AWS EC2 - Server 호스팅
- Atlas - MongoDB 클라우드 호스팅 서비스
- Nginx - 프록시 서버

## 사용된 도구

<hr />

- Node.js
- Express.js
- NPM - 패키지 관리자
- MongoDB - No Sql DataBase
- Nginx - 프록시 서버용

## 개발자

<hr />

- 표정문
- 김성현

## 차후 업데이트 목록

<hr />

- DB 스키마 구조 정밀화
- amdinPage 구성
- UserPage 구성
- ErrorPage CSS 변경
- Browser별 호환 체크
