import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "이메일은 필수입니다.",
  }),
  password: z.string().min(1, {
    message: "비밀번호를 입력해주세요.",
  }),
});
