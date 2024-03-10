interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

//* 회원가입 API
export const signupAPI = (body: SignUpAPIBody) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(body),
  }).then((res) => res.json());

//* 로그인 API
export const loginAPI = (body: { email: string; password: string }) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
    method: 'POST',
    body: JSON.stringify(body),
  }).then((res) => res.json());

//* 사용자 정보 API
export const meAPI = (token: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
    headers: {
      cookie: `${token}`,
    },
  }).then((res) => res.json());

//* 로그아웃 API
export const logoutAPI = () =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
    method: 'DELETE',
  }).then((res) => res.json);
