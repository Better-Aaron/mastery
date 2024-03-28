import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateField = LoginSchema.safeParse(credentials);

        if (validateField.success) {
          const { email, password } = validateField.data;

          const user = await getUserByEmail(email);
          //* 소셜 가입 유저가 로그인 시도 했을때
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compareSync(
            password,
            user.password,
          );

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
