import Data from '@/lib/data';
import { StoredUserType } from '@/types/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const { email, firstname, lastname, password, birthday } = await req.json();

    if (!email || !firstname || !lastname || !password || !birthday) {
      return NextResponse.json(
        { error: '필수 데이터가 없습니다.' },
        {
          status: 400,
        }
      );
    }
    const userExist = Data.user.exist({ email });
    if (userExist) {
      return NextResponse.json(
        { error: '이미 가입된 이메일입니다.' },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const users = Data.user.getList();
    let userId;
    if (users.length === 0) {
      userId = 1;
    } else {
      userId = users[users.length - 1].id + 1;
    }

    const newUser: StoredUserType = {
      id: userId,
      email,
      firstname,
      lastname,
      password: hashedPassword,
      birthday,
      profileImage: '/static/image/user/default_user_profile_image.jpg',
    };

    Data.user.write([...users, newUser]);

    const token = jwt.sign(String(newUser.id), process.env.JWT_SECRET!);

    //* 생성된 유저의 정보 전달
    const newUserWithoutPassword: Partial<Pick<StoredUserType, 'password'>> =
      newUser;
    delete newUserWithoutPassword.password;

    return NextResponse.json(
      { data: newUser },
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
