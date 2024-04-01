import * as z from "zod";

export const NewPasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: "6자리 이상의 비밀번호를 입력해주세요.",
    }),
    confirmPassword: z.string().min(6, {
      message: "6자리 이상의 비밀번호를 입력해주세요.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "일치하지 않는 비밀번호 입니다.",
    path: ["confirmPassword"],
  });

//* Auth, Reset password Schema
export const ResetSchema = z.object({
  email: z.string().email({
    message: "이메일은 필수입니다.",
  }),
});

//* Auth, 로그인 스키마
export const LoginSchema = z.object({
  email: z.string().email({
    message: "이메일은 필수입니다.",
  }),
  password: z.string().min(1, {
    message: "비밀번호를 입력해주세요.",
  }),
  code: z.optional(z.string()),
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
