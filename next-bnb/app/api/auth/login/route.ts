import Data from '@/lib/data';
import { StoredUserType } from '@/types/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: '필수 데이터가 없습니다.' },
        { status: 400 }
      );
    }

    const user = Data.user.find({ email });
    if (!user) {
      return NextResponse.json(
        { error: '해당 유저가 없습니다.' },
        { status: 404 }
      );
    }
    const isPasswordMatched = bcrypt.compareSync(password, user.password);
    if (!isPasswordMatched) {
      return NextResponse.json({ error: '비밀번호 불일치 .' }, { status: 403 });
    }

    const token = jwt.sign(String(user.id), process.env.JWT_SECRET!);

    const userWithoutPassword: Partial<Pick<StoredUserType, 'password'>> = user;

    delete userWithoutPassword.password;

    return NextResponse.json(
      { data: user },
      {
        status: 200,
        headers: {
          'Set-Cookie': `access-token=${token}; path=/; expires=${new Date(
            Date.now() + 60 * 60 * 24 * 1000 * 3
          )}; httponly`,
        },
      }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        error: e,
      },
      { status: 500 }
    );
  }
};
