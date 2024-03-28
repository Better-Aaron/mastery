This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## set Prisma

```shell
npm i -D prisma
npm install @prisma/client @auth/prisma-adapter

-- after change model from schema.prisma
npx prisma generate // 로컬 변경
npx prisma db push // neon에 추가
```

## neon postgres db 설정

[neon site](https://console.neon.tech/)

## 시크릿 코드 생성

```shell
npx auth secret
or
openssl rnad -hex 32
```
