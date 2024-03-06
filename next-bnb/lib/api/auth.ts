import axios from ".";

interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

export const signupAPI = async (body: SignUpAPIBody) => {
  const res =  await axios.post('/api/auth/signup', body);
  return res;
};