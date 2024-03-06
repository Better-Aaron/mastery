import { UserType } from '@/types/user';
import axios from '.';

interface SignUpAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

export const signupAPI = async (body: SignUpAPIBody) =>
  axios.post<UserType>('/api/auth/signup', body);
