interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

export const signupAPI = (body: SignUpAPIBody) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(body),
  }).then((res) => {
    return res.json();
  });

export const loginAPI = (body: { email: string; password: string }) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
    method: 'POST',
    body: JSON.stringify(body),
  }).then((res) => {
    return res.json();
  });

export const meAPI = (token: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
    headers: {
      cookie: `${token}`,
    },
  }).then((res) => {
    return res.json();
  });
