import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const res = await prisma.post.update({
    where: {
      id: 2,
    },
    data: {
      content: '포스트 내용 수정 12',
    },
  });
  return Response.json('ok!');
}
