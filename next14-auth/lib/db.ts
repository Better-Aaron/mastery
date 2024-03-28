import { PrismaClient } from "@prisma/client";

//* globalThis는 환경에 관계없이 전역객체를 통일된 방법으로 참조할 수 있는 방법이다.
//* globalThis 에 적용하는 이유는? hotreload 로 초기화 되지 않기 때문에.
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

//* 개발환경에서 일어나는 hotReload 때문에 아래와 같이 생성된 DB를 사용하는 방식으로 구현.
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
