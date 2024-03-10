import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const DELETE = async (req: NextRequest) => {
  try {
    //* 로그아웃 하기
    cookies().delete('access-token');
    return NextResponse.json({
      status: 200,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
};
