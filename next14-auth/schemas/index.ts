import * as z from "zod";

//* Auth, 로그인 스키마
export const LoginSchema = z.object({
  email: z.string().email({
    message: "이메일은 필수입니다.",
  }),
  password: z.string().min(1, {
    message: "비밀번호를 입력해주세요.",
  }),
});

//* Auth, 회원가입 스키마
export const RegisterSchema = z.object({
  email: z.string().email({
    message: "이메일은 필수입니다.",
  }),
  password: z.string().min(6, {
    message: "최소 6자리 이상 입력해주세요.",
  }),
  name: z.string().min(1, {
    message: "이름은 필수 입니다.",
  }),
});
