This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn About


delete -> 객체 속성 제거

### 리덕스 설정
1. 설치
```shell
yarn add next-redux-wrapper @reduxjs/tookit react-redux redux
yarn add @types/react-redux
```
2. type 생성 
types/reduxState.d.ts
3. 리덕스 툴킷을 이용하여 유저 모듈과 유저 값을 저장하는 리듀서 생성
store/user.ts
4. 리덕스 wrapper와 타입이 지원되는 커스텀 useSelector생성
store/index.ts

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
