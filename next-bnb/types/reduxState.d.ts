import { UserType } from './user';

//* 유저 redux state
// UserType과 isLogged 를 가지게 됨.
export type UserState = UserType & {
  isLogged: boolean;
};
