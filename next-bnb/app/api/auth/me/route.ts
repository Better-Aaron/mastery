import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import Data from '@/lib/data';
import { StoredUserType } from '@/types/user';

export const GET = async (req: NextRequest) => {
  try {
    const accessToken = req.headers.get('cookie');
    if (!accessToken) {
      return NextResponse.json(
        { error: 'access_token이 없습니다.' },
        { status: 400 }
      );
    }
    const userId = jwt.verify(accessToken, process.env.JWT_SECRET!);
    const user = Data.user.find({ id: Number(userId) });
    if (!user) {
      return NextResponse.json(
        { error: '해당 유저가 없습니다.' },
        { status: 404 }
      );
    }
    const userWithoutPassword: Partial<Pick<StoredUserType, 'password'>> = user;
    delete userWithoutPassword.password;

    return NextResponse.json(user, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
};
