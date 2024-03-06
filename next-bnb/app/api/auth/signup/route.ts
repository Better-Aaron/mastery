import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Data from '@/lib/data';
import { StoredUserType } from '@/types/user';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const POST = async (req: NextApiRequest) => {
  if (req.method === 'POST') {
    const data = (await req.body.getReader().read()).value;
    const str = String.fromCharCode.apply(String, data);
    const _body = JSON.parse(str);

    const { email, firstname, lastname, password, birthday } = _body;

    if (!email || !firstname || !lastname || !password || !birthday) {
      //return res.status(400).json({error: '필수 데이터가 없습니다.'})
      return NextResponse.json(
        { error: '필수 데이터가 없습니다.' },
        {
          status: 400,
        }
      );
    }
    const userExist = Data.user.exist({ email });
    if (userExist) {
      //return res.status(409).json({error: '이미 가입된 이메일입니다.'})
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

    cookies().set(
      'access-token',
      `${token}; path=/; expires=${new Date(
        Date.now() + 60 * 60 * 24 * 1000 * 3
      )}; httponly`
    );

    //* 생성된 유저의 정보 전달
    const newUserWithoutPassword: Partial<Pick<StoredUserType, 'password'>> =
      newUser;
    delete newUserWithoutPassword.password;

    return NextResponse.json(newUser);

    // res.setHeader(
    //   "Set-Cookie",
    //   `access_token=${token}; path=/; expires=${new Date(
    //     Date.now() + 60 * 60 * 24 * 1000 * 3
    //   )}; httponly`
    // );

    const response = NextResponse.next();
    // response.headers.set(
    //   "Set-Cookie",
    //   `access_token=${token}; path=/; expires=${new Date(
    //     Date.now() + 60 * 60 * 24 * 1000 * 3
    //   )}; httponly`
    // );
    response.cookies.set(
      'access_token',
      `${token}; path=/; expires=${new Date(
        Date.now() + 60 * 60 * 24 * 1000 * 3
      )}; httponly`
    );
    return response;
    // await new Promise((resolve) => {});
  }
  // res.statusCode = 405;

  // return res.end();
};
